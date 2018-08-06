import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { User } from './models/user.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user: User;
  _userSubscription: any;

  constructor(public api: ApiService,
    public auth: AuthService,
    private router: Router) {
    this.user = auth.user;
    this._userSubscription = this.auth.userChange.subscribe(user => {
      this.user = user;
    });
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
