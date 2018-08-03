import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { catchError, retry } from 'rxjs/operators'; 
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient,
              private router: Router) { }


  get(router: string, action: string, params): Observable<any> {
    let httpParams = new HttpParams();
    for(let key in params) {
      httpParams = httpParams.append(key, params[key]);
    }
    return this.http.get<any[]>('/api' + router + action, {params: httpParams});
  }

  post(router: string, action: string, data): Observable<any> {
    return this.http.post<any>('/api' + router + action, data);
  } 

  private handleError(err: HttpErrorResponse){ 
   
      return throwError('error!');
  }
}
