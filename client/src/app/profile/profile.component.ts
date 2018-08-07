import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ApiService } from '../services/api.service'; 
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  url: any;
  form: FormGroup;
  loading: boolean = false;
  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(private api: ApiService,
    private fb: FormBuilder) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.form = this.fb.group({
      photo: null
    });
  }

  onSubmit() {
    const formModel = this.form.value;
    this.loading = true;
    this.api.post('/user', '/profile/photo', this.form.value).subscribe(res => {
      this.loading = false;
      this.url = res.photo;
    }); 
  } 

  clearFile() {
    this.form.get('photo').setValue(null);
    this.fileInput.nativeElement.value = '';
  }

  onFileChange(event) {
    let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => { 
        this.form.get('photo').setValue({
          value: reader.result
        })  
      };
    }
  }
}
