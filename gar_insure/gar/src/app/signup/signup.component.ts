import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {



  public username:string='';
  public password:string='';
  public email:string='';
  public state:string='';
  public address:string='';
  public mobile:number=null;
  public zipcode:number=null;
  public city:string='';
  constructor(public authService:AuthService,public router:Router) { }

  ngOnInit(): void {
  }
  onReg(form)
  {
    if(form.valid)
    {
      this.authService.registering(form.value.username,form.value.password,form.value.email,form.value.mobile,form.value.state,form.value.address,form.value.city);
     this.router.navigate(['/login']);
    }
  }

}
