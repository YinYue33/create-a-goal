import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GoalForumComponent } from './goal-forum.component';
 
import { GoalTaskComponent } from './goal-task/goal-task.component';


const goalForumRoutes: Routes = [
    {
        path:'forum/:id',
        component: GoalForumComponent,
        children: [
            {
                path: ':id',
                component: GoalTaskComponent
            } 
        ]

    }
]

@NgModule({
    imports: [
        RouterModule.forChild(goalForumRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: []
})
export class GoalForumRoutingModule{}