import { Component, OnInit } from '@angular/core';
import { Goal } from '../models/goal.model';
import { User } from '../models/user.model';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent implements OnInit {

  goals: Goal[];
  user: User; 
  _userSubscription: any;
  constructor(private api: ApiService,
    private router: Router,
  private auth: AuthService) {  
    this.user = auth.user;
  }

  ngOnInit() {
    this.api.get('/goal', '/get/all', {}).subscribe(res => {
      this.goals = res; 
    })
  }

  joined(goal: Goal): boolean{
    if(this.user === null) return false;
    return goal.participants.indexOf(this.user._id) !== -1;
  }
}
