import { AuthService } from './auth.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gar';
  // isLog=this.authService.isLogged;
  constructor(public authService:AuthService){}
  logout()
  {
    this.authService.isLogged=false;
    // this.isLog=false;
  }

}
