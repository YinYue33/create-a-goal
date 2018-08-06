import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Subject } from 'rxjs';
import { ApiService } from '../services/api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public userChange: Subject<User>;
  public user: User;

  constructor(private api: ApiService) {
    this.userChange = new Subject<User>();
    this.api.get('', '/isLoggedIn', {}).subscribe(user => {
      this.user = user;
      this.userChange.next(this.user);
    })
  }

  logout() {
    this.api.get('', '/logout', {}).subscribe(
      res => {
        this.user = null;
        this.userChange.next(null);
      }
    );
  };

  signup(signupInfo) {
    this.api.post('', '/signup', signupInfo).subscribe(user => {
      this.user = user;
      this.userChange.next(user);
    });
  };

  login(loginInfo) {
    this.api.post('', '/login', { username: loginInfo.username, password: loginInfo.password }).subscribe(user => {
      this.user = user;
      this.userChange.next(user);
    });
  };
}
