import { Component, OnInit } from '@angular/core';
import { PolauthService } from './../polauth.service';
import { AuthService } from './../auth.service';

@Component({
  selector: 'app-claims',
  templateUrl: './claims.component.html',
  styleUrls: ['./claims.component.css']
})
export class ClaimsComponent implements OnInit {
  policies=[];



  constructor(public polservice:PolauthService,public authService:AuthService) { }

  ngOnInit(): void {
    this.policies=this.polservice.get_policies().policies;

  }
   toggl(id)
  {  //console.log(id);
    //console.log(document.getElementById(id));
    document.getElementById(id).classList.toggle('show');

  }

}
