import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core'; 
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component'; 
import { HttpClientModule } from '@angular/common/http'; 
import { MatFormFieldModule, MatInputModule, MatNativeDateModule, MatDialogModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateAGoalComponent } from './create-a-goal/create-a-goal.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { GoalComponent } from './goal/goal.component';
import { PublicComponent } from './public/public.component';
import { ProfileComponent } from './profile/profile.component'; 
import { AppRoutingModule } from './app-routing.module';
import { GoalForumModule } from './goal-forum/goal-forum.module';


 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    CreateAGoalComponent,
    GoalComponent,
    PublicComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    GoalForumModule,
    AppRoutingModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }