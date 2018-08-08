import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-goal-forum-home',
  templateUrl: './goal-forum-home.component.html',
  styleUrls: ['./goal-forum-home.component.css']
})
export class GoalForumHomeComponent implements OnInit {

  @Input()tasks: Task[];
  constructor() { }

  ngOnInit() {
  }

}
