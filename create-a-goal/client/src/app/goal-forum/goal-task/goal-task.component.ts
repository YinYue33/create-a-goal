import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
 

import { ApiService } from '../../services/api.service';
import { Comment } from '../../models/comment.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-goal-task',
  templateUrl: './goal-task.component.html',
  styleUrls: ['./goal-task.component.css']
})
export class GoalTaskComponent implements OnInit {

  taskID: any;
  task$: any;
  comments: Comment[] = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private api: ApiService,
    private auth: AuthService) {
  }

  ngOnInit() {
    this.task$ = this.route.paramMap.subscribe(res => {
      this.taskID = res.get('id');
      this.api.get('/task', '/comments', {id : this.taskID}).subscribe(comments => {
        this.comments = comments;
      }); 
    }) 
  }

  addComment(comment) {
    let newComment = {
        comment: comment,
        task: this.taskID,
        createdTime: Date.now()
    }
    this.api.post('/task', '/add/comment',newComment).subscribe(comment => {
         this.comments.push(comment);
         this.comments.sort((a, b) => b.createdTime - a.createdTime);
    });
  }

  deleteComment(comment) {
    this.api.delete('/task','/delete/comment', {id : comment._id}).subscribe(res => {
        this.comments = this.comments.filter(com => com._id !== comment._id);
    });
  }

}
