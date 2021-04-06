import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-updprofile',
  templateUrl: './updprofile.component.html',
  styleUrls: ['./updprofile.component.css']
})
export class UpdprofileComponent implements OnInit {

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
  onUpd(form)
  {
    if(form.valid)
    {

      this.authService.updating(form.value.username,form.value.password,form.value.email,form.value.mobile,form.value.state,form.value.address,form.value.city);
    this.router.navigate(['/home/profile']);
    }
  }

}
