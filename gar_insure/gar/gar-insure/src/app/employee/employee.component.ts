import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthService } from './../auth.service';
import { PolauthService } from './../polauth.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  public username:string='';
  public vehicleno:string='';
  public email:string='';
  public comp:string='';
  public servt:string='';
  public mobile:number=null;
  public regyear:number=null;
  public city:string='';
  public premium:string='5000';
  public claim:string='500000';
  numpeople;
  // sdate:Date;
  // edate:Date;

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
      this.polauthService.employee_policy(this.authService.cur_user,form.value.comp,form.value.mobile,form.value.numpeople,form.value.city);
     //this.router.navigate(['/login']);
     (<HTMLInputElement>document.getElementsByClassName("comp")[0]).value=this.comp+"";
     (<HTMLInputElement>document.getElementsByClassName("mob")[0]).value=this.mobile+"";
     //(<HTMLInputElement>document.getElementsByClassName("servt")[0]).value=this.servt+"";
     (<HTMLInputElement>document.getElementsByClassName("npep")[0]).value=this.numpeople+"";
     //(<HTMLInputElement>document.getElementsByClassName("reg")[0]).value=this.regyear+"";
     (<HTMLInputElement>document.getElementsByClassName("cit")[0]).value=this.city+"";
     (<HTMLInputElement>document.getElementsByClassName("prem")[0]).value=this.premium+"";
     (<HTMLInputElement>document.getElementsByClassName("clam")[0]).value=this.claim+"";
    }
  }

}
