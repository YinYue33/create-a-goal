import { Component, OnInit } from '@angular/core'; 
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-create-a-goal',
  templateUrl: './create-a-goal.component.html',
  styleUrls: ['./create-a-goal.component.css']
})
export class CreateAGoalComponent implements OnInit {

  createAGoalForm: FormGroup; 

  constructor(private api: ApiService,
             private router: Router) { 
    this.createAGoalForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      description: new FormControl(null),
      startDate: new FormControl(null, Validators.required),
      endDate: new FormControl(null, Validators.required),
      maxUser: new FormControl(null),
      entryCredit: new FormControl(null)
    });  
  } 

  ngOnInit() {
  }

  onCreateAGoal(){  
    this.api.post('/goal', '/add', this.createAGoalForm.value).subscribe(res => {
      this.router.navigate(['/home']);
    });
  }

}
