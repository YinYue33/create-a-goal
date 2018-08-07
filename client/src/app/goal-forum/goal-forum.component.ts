import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({ 
  templateUrl: './goal-forum.component.html',
  styleUrls: ['./goal-forum.component.css']
})
export class GoalForumComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() { 
      console.log(this.route.snapshot.paramMap.get('id'));
  }

}
