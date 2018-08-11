import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule, MatInputModule, MatNativeDateModule, MatDialogModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { GoalForumComponent } from './goal-forum.component'
import { GoalForumHomeComponent } from './goal-forum-home/goal-forum-home.component';
import { GoalTaskComponent } from './goal-task/goal-task.component';
import { GoalForumRoutingModule } from './goal-forum-routing.module';
import { CreateATaskComponent } from './create-a-task/create-a-task.component';

@NgModule({
    imports: [
        CommonModule,
        GoalForumRoutingModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatDialogModule
    ],
    declarations: [
        GoalForumComponent,
        GoalForumHomeComponent,
        GoalTaskComponent,
        CreateATaskComponent
    ], 
    entryComponents: [CreateATaskComponent],
    providers: []
})

export class GoalForumModule { }