import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../models/task.model';
import { Goal } from '../../models/goal.model';

@Component({
  selector: 'app-goal-forum-home',
  templateUrl: './goal-forum-home.component.html',
  styleUrls: ['./goal-forum-home.component.css']
})
export class GoalForumHomeComponent implements OnInit {

  @Input()tasks: Task[];
  @Input()goal: Goal;
  constructor() { }

  ngOnInit() {
  }

}
