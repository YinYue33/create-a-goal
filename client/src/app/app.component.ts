import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
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

  constructor(public api : ApiService,
  private router : Router){
      this._userSubscription = this.api.userChange.subscribe(user => { 
        this.user = user
      }); 
  }

  logout(){
    this.api.logout();
    this.router.navigate(['/login']);
  }
}
