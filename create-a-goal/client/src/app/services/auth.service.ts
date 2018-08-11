import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Subject } from 'rxjs';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userChange: Subject<User>;
  user: User;

  constructor(private api: ApiService, private router: Router) {
    this.userChange = new Subject<User>();
    this.api.get('', '/sessionUser', {}).subscribe(user => {
      this.user = user;
      this.userChange.next(this.user);
    });
  }

  updateProfile(profile){
    this.api.put('/user', '/put', profile).subscribe(user => {
      this.user = user;
      this.userChange.next(user);
    });
  }

  logout() {
    this.api.get('', '/logout', {}).subscribe(
      res => {
        this.user = null;
        this.userChange.next(null);
        this.router.navigate(['/login']);
      }
    );
  };

  signup(signupInfo) {
    this.api.post('', '/signup', signupInfo).subscribe(user => {
      console.log(user);
      this.user = user;
      this.userChange.next(user);
      this.router.navigate(['/home']);
    });
  };

  login(loginInfo) {
    this.api.post('', '/login', { username: loginInfo.username, password: loginInfo.password }).subscribe(user => {
      console.log(user);
      this.user = user;
      this.userChange.next(user);
      this.router.navigate(['/home']);
    });
  };
}
