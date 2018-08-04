import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private api: ApiService,
              private router: Router) { 
    this.loginForm = new FormGroup({
      username: new FormControl(null, Validators.required), 
      password: new FormControl(null, Validators.required)
    });
  }

  ngOnInit() {
  }

  login(){ 
     this.api.login(this.loginForm.value);
     this.router.navigate(['/home']);
  }

}
