import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { User } from '../models/user.model';

@Component({ 
  templateUrl: './goal-forum.component.html',
  styleUrls: ['./goal-forum.component.css']
})
export class GoalForumComponent implements OnInit {

  goalID: any;
  participants: User[];
  constructor(private route: ActivatedRoute,
              private router: Router,
              private api: ApiService) { }

  ngOnInit() { 
      this.goalID = this.route.snapshot.paramMap.get('id');
      this.api.get('/common', '/participants', {id : this.goalID}).subscribe(participants => {
        this.participants = participants;
      });
  }

}
