import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthService } from './../auth.service';
import { PolauthService } from './../polauth.service';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit {

  public username:string='';
  public prop:string='';
  public own:string='';
  public gender:string='';
  public occupation:string='';
  public age:number=null;
  public incyear:number=null;
  public city:string='';
  public premium:string='5000';
  public claim:string='500000';
  numpeople;
  mobile;
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
      this.polauthService.income_policy(this.authService.cur_user,form.value.occupation,form.value.mobile,form.value.gender,form.value.age,form.value.incyear,form.value.city);
     //this.router.navigate(['/login']);
     (<HTMLInputElement>document.getElementsByClassName("occu")[0]).value=this.occupation+"";
     (<HTMLInputElement>document.getElementsByClassName("gen")[0]).value=this.gender+"";
     (<HTMLInputElement>document.getElementsByClassName("age")[0]).value=this.age+"";
     (<HTMLInputElement>document.getElementsByClassName("incy")[0]).value=this.incyear+"";
     (<HTMLInputElement>document.getElementsByClassName("mob")[0]).value=this.mobile+"";
     (<HTMLInputElement>document.getElementsByClassName("cit")[0]).value=this.city+"";
     (<HTMLInputElement>document.getElementsByClassName("prem")[0]).value=this.premium+"";
     (<HTMLInputElement>document.getElementsByClassName("clam")[0]).value=this.claim+"";
    }
  }


}
