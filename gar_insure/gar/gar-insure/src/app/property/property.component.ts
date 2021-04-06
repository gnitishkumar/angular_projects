import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthService } from './../auth.service';
import { PolauthService } from './../polauth.service';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {

  public username:string='';
  public prop:string='';
  public own:string='';
  public area:string='';
  public servt:string='';
  public cost:number=null;
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
      this.polauthService.property_policy(this.authService.cur_user,form.value.prop,form.value.cost,form.value.own,form.value.area,form.value.city);
     //this.router.navigate(['/login']);
     (<HTMLInputElement>document.getElementsByClassName("prop")[0]).value=this.prop+"";
     (<HTMLInputElement>document.getElementsByClassName("cost")[0]).value=this.cost+"";
     (<HTMLInputElement>document.getElementsByClassName("own")[0]).value=this.own+"";
     (<HTMLInputElement>document.getElementsByClassName("area")[0]).value=this.area+"";
     //(<HTMLInputElement>document.getElementsByClassName("reg")[0]).value=this.regyear+"";
     (<HTMLInputElement>document.getElementsByClassName("cit")[0]).value=this.city+"";
     (<HTMLInputElement>document.getElementsByClassName("prem")[0]).value=this.premium+"";
     (<HTMLInputElement>document.getElementsByClassName("clam")[0]).value=this.claim+"";
    }
  }


}
