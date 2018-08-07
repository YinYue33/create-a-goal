import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Router } from '@angular/router';
 

@Injectable({
  providedIn: 'root'
})
export class ApiService { 

  constructor(private http: HttpClient,
    private router: Router) {
    
  }

  get(router: string, action: string, params): Observable<any> {
    let httpParams = new HttpParams();
    for (let key in params) {
      httpParams = httpParams.append(key, params[key]);
    }
    return this.http.get<any[]>('/api' + router + action, { params: httpParams }).pipe(catchError(this.handleError(this)));
  }

  post(router: string, action: string, data): Observable<any> {
    return this.http.post<any>('/api' + router + action, data).pipe(catchError(this.handleError(this)));
  }

  delete(router: string, action: string, params): Observable<any> {
    let httpParams = new HttpParams();
    for (let key in params) {
      httpParams = httpParams.append(key, params[key]);
    }
    return this.http.delete<any>('/api' + router + action, { params: httpParams }).pipe(catchError(this.handleError(this)));
  }

  put(router: string, action: string, data): Observable<any>{
    return this.http.put<any>('/api'+ router + action, data).pipe(catchError(this.handleError(this)));
  }

  private handleError(self) {
    return (err: HttpErrorResponse) => { 
      if (err.status === 401 || err.status === 403) {
        self.router.navigate(['/login']);
      }
      return throwError(err.error);
    } 
  } 
}
