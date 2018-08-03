import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService { 

  private user;
  public isLoggedInChange: Subject<boolean> = new Subject<boolean>();
  public usernameChange: Subject<string> = new Subject<string>();

  constructor(private api : ApiService) { 
    api.get('', '/isLoggedIn', {}).subscribe(user => { 
        this.user = user; 
        this.isLoggedInChange.next(this.user !== null);
        if(user){
          this.usernameChange.next(this.user.name);
        } 
    }); 
  }  

  getUserName(): string{
    return this.user.name;
  }

  login(loginInfo) {
    this.api.post('', '/login', {username: loginInfo.username, password: loginInfo.password}).subscribe(
      user => { 
        this.user = user; 
        this.isLoggedInChange.next(true);
        this.usernameChange.next(this.user.name); 
      },
      err => {throw err}
    )
  }

  logout(){
    this.api.get('','/logout',{}).subscribe(
      res => {
        this.user = null;
        this.isLoggedInChange.next(false); 
      }
    ); 
  }

  signup(signupInfo){ 
    this.api.post('', '/signup', signupInfo).subscribe(user => { 
        this.user =  user 
        this.isLoggedInChange.next(true);
        this.usernameChange.next(this.user.name);
      }, err => {
         
      } 
    );   
  }
}
