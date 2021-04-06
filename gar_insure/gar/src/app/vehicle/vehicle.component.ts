import { AuthService } from './../auth.service';
import { PolauthService } from './../polauth.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  public username:string='';
  public vehicleno:string='';
  public email:string='';
  public manufacturer:string='';
  public model:string='';
  public mobile:number;
  public regyear:number=null;
  public city:string='';
  public premium:string='5000';
  public claim:string='500000';

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  constructor(public polauthService:PolauthService,public authService:AuthService,public router:Router,private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
  onReg(form)
  {
    if(form.valid)
    {
      this.polauthService.vehicle_policy(this.authService.cur_user,form.value.vehicleno,form.value.mobile,form.value.manufacturer,form.value.model,form.value.regyear,form.value.city);
     //this.router.navigate(['/login']);
     console.log(this.mobile);
     (<HTMLInputElement>document.getElementsByClassName("veh")[0]).value=this.vehicleno+"";
     (<HTMLInputElement>document.getElementsByClassName("mob")[0]).value=form.value.mobile+"";
     (<HTMLInputElement>document.getElementsByClassName("manu")[0]).value=this.manufacturer+"";
     (<HTMLInputElement>document.getElementsByClassName("mode")[0]).value=this.model+"";
     (<HTMLInputElement>document.getElementsByClassName("reg")[0]).value=this.regyear+"";
     (<HTMLInputElement>document.getElementsByClassName("cit")[0]).value=this.city+"";
     (<HTMLInputElement>document.getElementsByClassName("prem")[0]).value=this.premium+"";
     (<HTMLInputElement>document.getElementsByClassName("clam")[0]).value=this.claim+"";
    }
  }
 redirec()
 {
   this.router.navigate(['home/policies']);
 }
}
