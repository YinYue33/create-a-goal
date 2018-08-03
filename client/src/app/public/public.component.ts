import { Component, OnInit } from '@angular/core';
import { Goal } from '../models/goal.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent implements OnInit {

  goals: Goal[];
  constructor( private api : ApiService ) { }

  ngOnInit() {
    this.api.get('/goal', '/get/all', {}).subscribe(res => {
      this.goals = res;
    })
  }

}
