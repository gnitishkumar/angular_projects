import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthService } from './../auth.service';
import { PolauthService } from './../polauth.service';


@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {


  public username:string='';
  public vehicleno:string='';
  public email:string='';
  public manufacturer:string='';
  public model:string='';
  public mobile:number=null;
  public regyear:number=null;
  public city:string='';
  public premium:string='5000';
  public claim:string='500000';
  numpeople;
  sdate:Date;
  edate:Date;

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  constructor(public polauthService:PolauthService,public authService:AuthService,private _formBuilder: FormBuilder) { }

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
      this.polauthService.travel_policy(this.authService.cur_user,form.value.sdate,form.value.mobile,form.value.edate,form.value.numpeople,form.value.city);
     //this.router.navigate(['/login']);
     (<HTMLInputElement>document.getElementsByClassName("sdat")[0]).value=this.sdate+"";
     (<HTMLInputElement>document.getElementsByClassName("mob")[0]).value=this.mobile+"";
     (<HTMLInputElement>document.getElementsByClassName("edat")[0]).value=this.edate+"";
     (<HTMLInputElement>document.getElementsByClassName("npep")[0]).value=this.numpeople+"";
     //(<HTMLInputElement>document.getElementsByClassName("reg")[0]).value=this.regyear+"";
     (<HTMLInputElement>document.getElementsByClassName("cit")[0]).value=this.city+"";
     (<HTMLInputElement>document.getElementsByClassName("prem")[0]).value=this.premium+"";
     (<HTMLInputElement>document.getElementsByClassName("clam")[0]).value=this.claim+"";
    }
  }

}
