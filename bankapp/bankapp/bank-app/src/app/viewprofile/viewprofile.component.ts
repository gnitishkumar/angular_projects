import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewprofileComponent implements OnInit {
  public username:string='';
  public password:string='';
  public email:string='';
  public state:string='';
  public address:string='';
  public mobile:number=null;
  public zipcode:number=null;
  public city:string='';
  constructor(public authService:AuthService) { }

  ngOnInit(): void {
    let key=localStorage.key(this.authService.uniqKey);
    this.username=key;
    let det=JSON.parse(localStorage.getItem(key));
    this.email=det.password;
    this.mobile=det.mobile;
    this.state=det.state;
    this.address=det.address;
    this.city=det.city;

  }

}
