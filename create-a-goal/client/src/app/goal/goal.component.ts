import { Component, OnInit , Input, HostListener} from '@angular/core';
import { AuthService } from '../services/auth.service';
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

  
  enter: boolean = false;

  constructor(private api: ApiService, 
    private router: Router,
  private auth: AuthService) { }

  ngOnInit() {
  } 

  getColor(){
    if(this.auth.userID == this.goal.creator){
        return 'red';
    }else if (this.goal.participants.indexOf(this.auth.userID) !== -1){
      return 'blue';
    }else{
      return 'green';
    }
  }

  @HostListener('mouseenter') mouseEnter() {
    this.enter = true;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.enter = false;
  } 

  detail(){
    this.router.navigate(['/forum', this.goal._id]);
  }

}
