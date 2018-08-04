import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup; 
  private signupErrorMessage: string;

  constructor(private api: ApiService,
              private router: Router) { 
    this.signupForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    }); 
    this.signupErrorMessage = null;
  }

  ngOnInit() {
  }

  signup(){   
      this.api.signup(this.signupForm.value); 
      this.router.navigate(['/home']);
  }

}
