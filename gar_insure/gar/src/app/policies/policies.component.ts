import { PolauthService } from './../polauth.service';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-policies',
  templateUrl: './policies.component.html',
  styleUrls: ['./policies.component.css']
})
export class PoliciesComponent implements OnInit {
  policies=[];



  constructor(public polservice:PolauthService) { }

  ngOnInit(): void {
    this.policies=this.polservice.get_policies().policies;

  }
   toggl(id)
  {  //console.log(id);
    //console.log(document.getElementById(id));
    document.getElementById(id).classList.toggle('show');

  }

}
