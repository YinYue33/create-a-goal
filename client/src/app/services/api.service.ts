import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public userChange: Subject<User>;

  constructor(private http: HttpClient,
    private router: Router) {
    this.userChange = new Subject<User>();
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

  private handleError(self) {
    return (err: HttpErrorResponse) => {
      if (err.status === 401 || err.status === 403) {
        self.router.navigate(['/login']);
        self.userChange.next(null);
      }
      return throwError(err.error);
    }
  }

  logout(){
    this.get('','/logout',{}).subscribe(
      res => { 
        this.userChange.next(null); 
      }
    ); 
  };

  signup(signupInfo){ 
    this.post('', '/signup', signupInfo).subscribe(user => { 
         this.userChange.next(user);
      });   
  };

  login(loginInfo) {
    this.post('', '/login', {username: loginInfo.username, password: loginInfo.password}).subscribe(user => { 
          this.userChange.next(user);
      });
  };
}
