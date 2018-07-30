import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;

  constructor(private api: ApiService) { 
    this.signupForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }

  ngOnInit() {
  }

  onSignup(){ 
    this.api.post('', '/signup', this.signupForm.value).subscribe(res => {
      console.log(res);
    });
  }

}
