import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  
  private _isLoggedIn;
  private
  constructor(private api : ApiService) { 
    api.get('', '/isLoggedIn', {}).subscribe(res => this._isLoggedIn = res);
  } 

  isLoggedIn(): boolean {
    return this._isLoggedIn;
  }

  login(loginInfo) {
    this.api.post('', '/login', {username: loginInfo.username, password: loginInfo.password}).subscribe(
      res => { this._isLoggedIn = true; },
      err => {throw err}
    )
  }

  logout(){
    this.api.get('','/logout',{}).subscribe(
      res => {
        this._isLoggedIn = false;
      }
    ); 
  }

  signup(signupInfo){ 
    this.api.post('', '/signup', signupInfo).subscribe(res => { 
        this._isLoggedIn = true; 
      }, err => {
         
      } 
    );   
  }
}
