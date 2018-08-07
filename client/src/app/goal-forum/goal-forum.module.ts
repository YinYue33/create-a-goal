import { NgModule } from '@angular/core';
import { GoalForumComponent } from './goal-forum.component' 
import { GoalForumHomeComponent } from './goal-forum-home/goal-forum-home.component';
import { GoalTaskComponent } from './goal-task/goal-task.component';

import { GoalForumRoutingModule } from './goal-forum-routing.module';

@NgModule({
    imports: [
        GoalForumRoutingModule
    ],
    declarations: [
        GoalForumComponent,
        GoalForumHomeComponent,
        GoalTaskComponent
    ],
    providers: []
})

export class GoalForumModule{}