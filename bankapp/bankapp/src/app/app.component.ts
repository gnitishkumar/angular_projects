import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {   AppRoutingModule } from './app-routing.module';

declare var device;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'bankapp';
  constructor(public authService:AuthService,private router: Router){}
  ngOnInit() {
    document.addEventListener("deviceready", function() {
    alert(device.platform);
    }, false);
    }
  logout(){
    this.authService.isLogged=false;
    this.router.navigate(['/login']);
  }
  activate(){
    document.getElementsByClassName('sidebar')[0].classList.toggle('active');

  }
}
