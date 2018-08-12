import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { FormGroup, Validators, FormControl } from "@angular/forms";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;
  loading: boolean = false;
  user: User;

  constructor(private api: ApiService,
    public auth: AuthService) {  
  }

  ngOnInit() {
    if(!this.auth.user){
      this.api.get('', '/sessionUser',{}).subscribe(user => {
        console.log(user);
        this.user = user;
        this.profileForm = new FormGroup({
          name: new FormControl(this.user.name, Validators.required),
          email: new FormControl(this.user.email, Validators.required),
          photo: new FormControl(null)
        }); 
      })
    }else{
      this.user = this.auth.user;
      this.profileForm = new FormGroup({
        name: new FormControl(this.user.name, Validators.required),
        email: new FormControl(this.user.email, Validators.required),
        photo: new FormControl(null)
      }); 
    }    
  }

  onFileChange(event) {
    let reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.profileForm.get('photo').setValue(reader.result);
        this.user.photo = reader.result;
      };
    }
  }

  updateProfile() {
    this.loading = true;
    this.auth.updateProfile(this.profileForm.value); 
    this.loading = false;
  }
}
