import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  get(router: string, action: string, params): Observable<any> {
    let httpParams = new HttpParams();
    for(let key in params) {
      httpParams = httpParams.append(key, params[key]);
    }
    return this.http.get<any[]>('/api' + router + action, {params: httpParams})
        .pipe(retry(1),
        catchError(this.handleError));
  }

  post(router: string, action: string, data): Observable<any> {
    return this.http.post<any>('/api' + router + action, data, { observe: "response"}).pipe(catchError(this.handleError));
  } 

  private handleError(err: HttpErrorResponse){
    console.log(err);
    return throwError('error!');
  }
}
