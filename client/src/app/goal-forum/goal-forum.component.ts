import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-goal-forum',
  templateUrl: './goal-forum.component.html',
  styleUrls: ['./goal-forum.component.css']
})
export class GoalForumComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { 
  }

}
