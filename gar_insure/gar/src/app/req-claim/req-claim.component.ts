import { Component, OnInit } from '@angular/core';
import { PolauthService } from './../polauth.service';
import { AuthService } from './../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-req-claim',
  templateUrl: './req-claim.component.html',
  styleUrls: ['./req-claim.component.css']
})
export class ReqClaimComponent implements OnInit {

  policies=[];



  constructor(public polservice:PolauthService,public authService:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.policies=this.polservice.get_policies().policies;

  }
   toggl(id)
  {  //console.log(id);
    //console.log(document.getElementById(id));
    document.getElementById(id).classList.toggle('show');

  }
  onclam(policy)
  {
      if(policy.isvehicle)
      {
        this.polservice.make_vehicle(this.authService.cur_user,policy.vehiclenum,policy.mobile,policy.manufacturer,policy.model,policy.regyear,policy.city);
      }
      else if(policy.istravel)
      {
        this.polservice.make_travel(this.authService.cur_user,policy.start_date,policy.mobile,policy.end_date,policy.num_people,policy.city);
      }
      else if(policy.isincome)
      {
        this.polservice.make_income(this.authService.cur_user,policy.occupation,policy.mobile,policy.gender,policy.age,policy.income_year,policy.city);
      }
      else if(policy.isliability)
      {
        this.polservice.make_liability(this.authService.cur_user,policy.business_type,policy.mobile,policy.service_type,policy.num_people,policy.city);
      }
      else if(policy.isemployee)
      {
        this.polservice.make_employee(this.authService.cur_user,policy.company,policy.mobile,policy.num_people,policy.city);
      }
      else if(policy.isproperty)
      {
        this.polservice.make_property(this.authService.cur_user,policy.property_type,policy.cost,policy.owner_type,policy.area,policy.city);
      }
      this.router.navigate(['home/claims']);
  }

}
