import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';

import { ApiService } from '../services/api.service';
import { User } from '../models/user.model';
import { Goal } from '../models/goal.model';
import { Task } from '../models/task.model';
import { MatDialog } from '@angular/material';
import { CreateATaskComponent } from './create-a-task/create-a-task.component';


@Component({
  templateUrl: './goal-forum.component.html',
  styleUrls: ['./goal-forum.component.css']
})
export class GoalForumComponent implements OnInit {

  goalID: any;
  goal: Goal;
  participants: User[];
  tasks: Task[];
  constructor(private route: ActivatedRoute,
    private router: Router,
    private api: ApiService,
    public dialog: MatDialog,
    private auth: AuthService
  ) {
    this.goalID = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.api.get('/task', '/tasks', { id: this.goalID }).subscribe(tasks => {
      this.tasks = tasks;
    })
    this.api.get('/goal', '/get/one', { id: this.goalID }).subscribe(goal => {
      this.goal = goal;
    })
    this.api.get('/common', '/participants', { id: this.goalID }).subscribe(participants => {
      this.participants = participants;
    });
  }

  createTask() {
    const dialogRef = this.dialog.open(CreateATaskComponent, {
      width: '500px',
      data: { goalTitle: this.goal.title }
    });
    dialogRef.afterClosed().subscribe(task => {
      if (task) {
        task.goal = this.goalID;
        this.api.post('/task', '/add', task).subscribe(res => {
          this.tasks.push(res);
        });
      }
    });
  }

  join() {
    this.api.post('/goal', '/join', { goalID: this.goal._id }).subscribe(res => {
      this.goal = res;
      this.participants.push(this.auth.user);
    })
  }

  delete() {
    if (confirm('Are you sure you want to delete this goal')) {
      this.api.delete('/goal', '/delete', { id: this.goal._id }).subscribe(res => {
        this.router.navigate(['/home']);
      })
    }  
  }

  quit() {
    if (confirm('Are you sure you want to quit this goal?')) {
      this.api.post('/goal', '/quit', { goalID: this.goal._id }).subscribe(res => {
        this.goal = res;
        let index = this.participants.findIndex(par => par._id == this.auth.userID); 
        this.participants.splice(index, 1);
      })
    } 
  } 
}
