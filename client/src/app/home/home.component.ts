import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service'; 
import { Goal } from '../models/goal.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  createdGoals: Goal[]; 
  joinedGoals: Goal[];

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.get('/goal', '/get/created', {}).subscribe(res => {
      this.createdGoals = res;
    })
  }

}
