import { Injectable } from '@angular/core';
import { HttpEvent, HttpErrorResponse, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError, of } from 'rxjs'; 
import { catchError } from 'rxjs/operators'; 

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
        catchError((err: HttpErrorResponse) => {
            if((err.status === 401 || err.status === 403) && this.router.url !== '/signup' && this.router.url !=='login'){
                this.router.navigate(['/login']);
            }
            return throwError(err.error);
          })
    );
  }
}