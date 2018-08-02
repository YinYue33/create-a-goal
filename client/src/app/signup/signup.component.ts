import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../services/authenticate.service';
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

  constructor(private auth: AuthenticateService,
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

  onSignup(){   
      this.auth.signup(this.signupForm.value); 
  }

}
