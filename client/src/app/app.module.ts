import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

import { RouterModule, Routes } from '@angular/router'; 
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor } from './services/auth-interceptor';

export const routeConfig: Routes = [
  {
      path: 'home',
      component: HomeComponent
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
    LoginComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(routeConfig),
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule, 
    MatInputModule,
    FormsModule, 
    ReactiveFormsModule 
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
