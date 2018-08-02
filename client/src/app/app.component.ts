import { Component } from '@angular/core';
import { AuthenticateService } from './services/authenticate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'create-a-goal-UI';

  constructor(public auth : AuthenticateService){
      
  }
}
