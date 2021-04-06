import { Component, OnInit } from '@angular/core';
import { AuthService} from './../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username:string='';
  public password:string='';
  //this.authService.isRegistered=false;

  constructor(public authService:AuthService,private router:Router) { }

  ngOnInit(): void {

  }

  onAdding()
  { this.authService.isRegistered=false;
      // console.log(this.username);
       // console.log(this.password);
    this.authService.logged(this.username,this.password);
    if(this.authService.isLogged)
    this.router.navigate(['/home']);
  }
signup()
{
  this.router.navigate(['/signup']);
}

}
