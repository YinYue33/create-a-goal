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
    public auth: AuthService,
    private router: Router) {
    this.api.get('', '/isLoggedIn', {}).subscribe(user => { 
      if (user === null) {
        this.router.navigate(['/login']); 
      }else{
        this.user = user;
        this.profileForm = new FormGroup({
          name: new FormControl(user.name, Validators.required),
          email: new FormControl(user.email, Validators.required),
          photo: new FormControl(null)
        });
      }
    });
  }

  ngOnInit() {

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
