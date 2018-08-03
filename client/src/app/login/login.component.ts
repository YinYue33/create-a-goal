import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../services/authenticate.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private auth: AuthenticateService,
              private router: Router) { 
    this.loginForm = new FormGroup({
      username: new FormControl(null, Validators.required), 
      password: new FormControl(null, Validators.required)
    });
  }

  ngOnInit() {
  }

  onLogin(){ 
     this.auth.login(this.loginForm.value);
     this.router.navigate(['/home']);
  }

}
