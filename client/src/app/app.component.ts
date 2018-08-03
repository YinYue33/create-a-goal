import { Component } from '@angular/core';
import { AuthenticateService } from './services/authenticate.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'create-a-goal-UI';
  isLoggedIn: boolean;
  username: string;
  _loginSubscription: any;
  _usernameSubscription: any;

  constructor(public auth : AuthenticateService,
  private router : Router){
      this._loginSubscription = this.auth.isLoggedInChange.subscribe(res => this.isLoggedIn = res);
      this._usernameSubscription = this.auth.usernameChange.subscribe(res => { 
        this.username = res
      });
  }

  logout(){
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
