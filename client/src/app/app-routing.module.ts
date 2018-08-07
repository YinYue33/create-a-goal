import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

import { CreateAGoalComponent } from './create-a-goal/create-a-goal.component';
import { PublicComponent } from './public/public.component';
import { ProfileComponent } from './profile/profile.component';
import { GoalForumComponent } from './goal-forum/goal-forum.component';

const appRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'public',
        component: PublicComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'signup',
        component: SignupComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'create-a-goal',
        component: CreateAGoalComponent
      },
      {
        path: 'forum',
        component: GoalForumComponent
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
      }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes
        )
    ],
    exports:[ RouterModule ]
})
export class AppRoutingModule{}