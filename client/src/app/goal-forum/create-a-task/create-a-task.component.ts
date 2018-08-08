import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-create-a-task',
  templateUrl: './create-a-task.component.html',
  styleUrls: ['./create-a-task.component.css']
})
export class CreateATaskComponent implements OnInit {

  createATaskForm: FormGroup;
  goalTitle: string;
  constructor(private api: ApiService,
    private router: Router,
    public dialogRef: MatDialogRef<CreateATaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.goalTitle = data.goalTitle;
    this.createATaskForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      description: new FormControl(null),
      startDate: new FormControl(null, Validators.required),
      endDate: new FormControl(null, Validators.required)
    });
  }

  ngOnInit() {
  }

  createTask() {
    this.dialogRef.close(this.createATaskForm.value);
  } 

}
