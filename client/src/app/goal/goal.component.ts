import { Component, OnInit , Input} from '@angular/core';
import { Goal } from '../models/goal.model';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  @Input()goal: Goal;
  @Input()isCreator: boolean;
  @Input()joined: boolean;
  @Input()loggedin: boolean;

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit() {
  }

  join() {
      this.api.post('/goal', '/join', {goalID: this.goal._id}).subscribe(res => {
        this.goal = res; 
        this.joined = true;
      })
  }

  delete() {
      this.api.delete('/goal', '/delete', {id: this.goal._id}).subscribe(res => {
         
      })
  }

  quit(){
    this.api.post('/goal', '/quit', {goalID: this.goal._id}).subscribe(res => {
        this.goal = res;
        this.joined = false;
    })
  }

}
