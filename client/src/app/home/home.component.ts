import { Component, OnInit} from '@angular/core';
import { ApiService } from '../services/api.service'; 
import { Router } from '@angular/router';

import { Goal } from '../models/goal.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  createdGoals: Goal[]; 
  joinedGoals: Goal[]; 
  constructor(private api: ApiService,
  private router: Router) { 
    this.api.get('', '/isLoggedIn', {}).subscribe(user => { 
      if (user === null) {
        this.router.navigate(['/login']); 
      }else{
        this.api.get('/goal', '/get/created', {}).subscribe(res => {
          this.createdGoals = res;
        });
        this.api.get('/goal', '/get/joined', {}).subscribe(res => {
          this.joinedGoals = res;
        })
      }
    });
  }

  ngOnInit() {
    
  }

}
