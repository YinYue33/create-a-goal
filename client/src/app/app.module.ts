import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

import { RouterModule, Routes, Router } from '@angular/router'; 
import { HttpClientModule } from '@angular/common/http';

import { MatFormFieldModule, MatInputModule, MatNativeDateModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { CreateAGoalComponent } from './create-a-goal/create-a-goal.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { GoalComponent } from './goal/goal.component';
import { PublicComponent } from './public/public.component'; 



export const routeConfig: Routes = [
  {
      path: 'home',
      component: HomeComponent
  }, 
  {
    path: 'public',
    component: PublicComponent
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
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    CreateAGoalComponent,
    GoalComponent,
    PublicComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(routeConfig),
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule, 
    MatInputModule,
    FormsModule, 
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
