import { Component, OnInit, ElementRef } from '@angular/core';
import { ApiService } from './services/api.service';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { User } from './models/user.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  user: User;
  _userSubscription: any;  

  constructor(public api: ApiService,
    public auth: AuthService,
    public router: Router,
    public elementRef: ElementRef) {   
    this.auth.userID = this.elementRef.nativeElement.getAttribute('userID'); 
    this.user = this.auth.user;
    this._userSubscription = this.auth.userChange.subscribe(user => {
      this.user = user;
    }); 
    if(!this.auth.userID){ 
      //this.router.navigate(['/login']);
    }
  }

  ngOnInit(){ 
  }

  logout() { 
    this.auth.logout();
  }
}
