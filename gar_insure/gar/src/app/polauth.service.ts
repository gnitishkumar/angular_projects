import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PolauthService {

  constructor(public authService:AuthService) { }
  vehicle_policy(username,vehicleno,mob,manufact,mode,yearr,cityy)
  { //console.log(JSON.parse(localStorage.getItem(username)));
     var r=JSON.parse(localStorage.getItem(username));
    var old_pol=r.policies;
    var temp=old_pol.length;
    var pol={
      id:old_pol.length,
      claim:'unclaimed',
      isclaim:false,
    vehiclenum:vehicleno,
    manufacturer:manufact,
    mobile:mob,
    model:mode,
    regyear:yearr,
    city:cityy,
    istravel:false,
    isvehicle:true,
    isincome:false,
    isliability:false,
    isproperty:false,
    isemployee:false,
  };
  old_pol.push(pol);
   console.log(old_pol);

  var obj=this.authService.make_obj(old_pol);
    localStorage.setItem(username,JSON.stringify(obj));
    console.log(JSON.parse(localStorage.getItem(username)));


  //console.log(JSON.parse(localStorage.getItem(username)));
  }
  travel_policy(username,sdate,mob,edate,numpep,cityy)
  { //console.log(JSON.parse(localStorage.getItem(username)));
     var r=JSON.parse(localStorage.getItem(username));
    var old_pol=r.policies;
    var pol={
      id:old_pol.length,
      claim:'unclaimed',
      isclaim:false,
    start_date:sdate,
    end_date:edate,
    mobile:mob,
    num_people:numpep,
    city:cityy,
    istravel:true,
    isvehicle:false,
    isincome:false,
    isliability:false,
    isproperty:false,
    isemployee:false,
  };
  old_pol.push(pol);
 // console.log(old_pol);
  var obj=this.authService.make_obj(old_pol);
    localStorage.setItem(username,JSON.stringify(obj));

  //console.log(JSON.parse(localStorage.getItem(username)));
  }

  liability_policy(username,busit,mob,servt,numpep,cityy)
  { //console.log(JSON.parse(localStorage.getItem(username)));
     var r=JSON.parse(localStorage.getItem(username));
    var old_pol=r.policies;
    var pol={
      id:old_pol.length,
      claim:'unclaimed',
      isclaim:false,
    business_type:busit,
    service_type:servt,
    mobile:mob,
    num_people:numpep,
    city:cityy,
    istravel:false,
    isvehicle:false,
    isincome:false,
    isliability:true,
    isproperty:false,
    isemployee:false,
  };
  old_pol.push(pol);
 // console.log(old_pol);
  var obj=this.authService.make_obj(old_pol);
    localStorage.setItem(username,JSON.stringify(obj));

  //console.log(JSON.parse(localStorage.getItem(username)));
  }

  property_policy(username,prop,cost,own,area,cityy)
  { //console.log(JSON.parse(localStorage.getItem(username)));
     var r=JSON.parse(localStorage.getItem(username));
    var old_pol=r.policies;

    var pol={
      id:old_pol.length,
      claim:'unclaimed',
      isclaim:false,
    property_type:prop,
    owner_type:own,
    cost:cost,
    area:area,
    city:cityy,
    istravel:false,
    isvehicle:false,
    isincome:false,
    isliability:false,
    isproperty:true,
    isemployee:false,
  };
  old_pol.push(pol);
 // console.log(old_pol);
  var obj=this.authService.make_obj(old_pol);
    localStorage.setItem(username,JSON.stringify(obj));

  //console.log(JSON.parse(localStorage.getItem(username)));
  }

  employee_policy(username,comp,mob,numpep,cityy)
  { //console.log(JSON.parse(localStorage.getItem(username)));
     var r=JSON.parse(localStorage.getItem(username));
    var old_pol=r.policies;
    var pol={
      id:old_pol.length,
      claim:'unclaimed',
      isclaim:false,
      company:comp,
    mobile:mob,
    num_people:numpep,
    city:cityy,
    istravel:false,
    isvehicle:false,
    isincome:false,
    isliability:false,
    isproperty:false,
    isemployee:true,
  };
  old_pol.push(pol);
 // console.log(old_pol);
  var obj=this.authService.make_obj(old_pol);
    localStorage.setItem(username,JSON.stringify(obj));

  //console.log(JSON.parse(localStorage.getItem(username)));
  }

  income_policy(username,occu,mob,gen,age,incy,cityy)
  { //console.log(JSON.parse(localStorage.getItem(username)));
     var r=JSON.parse(localStorage.getItem(username));
    var old_pol=r.policies;
    var pol={
      id:old_pol.length,
      claim:'unclaimed',
      isclaim:false,
    occupation:occu,
    mobile:mob,
    age:age,
    gender:gen,
    income_year:incy,
    city:cityy,
    istravel:false,
    isvehicle:false,
    isincome:true,
    isliability:false,
    isproperty:false,
    isemployee:false,
  };
  old_pol.push(pol);
 // console.log(old_pol);
  var obj=this.authService.make_obj(old_pol);
    localStorage.setItem(username,JSON.stringify(obj));

  //console.log(JSON.parse(localStorage.getItem(username)));
  }

  make_vehicle(username,vehicleno,mob,manufact,mode,yearr,cityy)
  { //console.log(JSON.parse(localStorage.getItem(username)));
     var r=JSON.parse(localStorage.getItem(username));
    var old_pol=r.policies;
    var temp=old_pol.length;
    var pol={
      id:old_pol.length,
      claim:'claimed',
      isclaim:true,
    vehiclenum:vehicleno,
    manufacturer:manufact,
    mobile:mob,
    model:mode,
    regyear:yearr,
    city:cityy,
    istravel:false,
    isvehicle:true,
    isincome:false,
    isliability:false,
    isproperty:false,
    isemployee:false,
  };
  old_pol.push(pol);
   console.log(old_pol);

  var obj=this.authService.make_obj(old_pol);
    localStorage.setItem(username,JSON.stringify(obj));
    console.log(JSON.parse(localStorage.getItem(username)));


  //console.log(JSON.parse(localStorage.getItem(username)));
  }

  make_travel(username,sdate,mob,edate,numpep,cityy)
  { //console.log(JSON.parse(localStorage.getItem(username)));
     var r=JSON.parse(localStorage.getItem(username));
    var old_pol=r.policies;
    var pol={
      id:old_pol.length,
      claim:'claimed',
      isclaim:true,
    start_date:sdate,
    end_date:edate,
    mobile:mob,
    num_people:numpep,
    city:cityy,
    istravel:true,
    isvehicle:false,
    isincome:false,
    isliability:false,
    isproperty:false,
    isemployee:false,
  };
  old_pol.push(pol);
 // console.log(old_pol);
  var obj=this.authService.make_obj(old_pol);
    localStorage.setItem(username,JSON.stringify(obj));

  //console.log(JSON.parse(localStorage.getItem(username)));
  }

  make_liability(username,busit,mob,servt,numpep,cityy)
  { //console.log(JSON.parse(localStorage.getItem(username)));
     var r=JSON.parse(localStorage.getItem(username));
    var old_pol=r.policies;
    var pol={
      id:old_pol.length,
      claim:'claimed',
      isclaim:true,
    business_type:busit,
    service_type:servt,
    mobile:mob,
    num_people:numpep,
    city:cityy,
    istravel:false,
    isvehicle:false,
    isincome:false,
    isliability:true,
    isproperty:false,
    isemployee:false,
  };
  old_pol.push(pol);
 // console.log(old_pol);
  var obj=this.authService.make_obj(old_pol);
    localStorage.setItem(username,JSON.stringify(obj));

  //console.log(JSON.parse(localStorage.getItem(username)));
  }

  make_property(username,prop,cost,own,area,cityy)
  { //console.log(JSON.parse(localStorage.getItem(username)));
     var r=JSON.parse(localStorage.getItem(username));
    var old_pol=r.policies;

    var pol={
      id:old_pol.length,
      claim:'unclaimed',
      isclaim:false,
    property_type:prop,
    owner_type:own,
    cost:cost,
    area:area,
    city:cityy,
    istravel:false,
    isvehicle:false,
    isincome:false,
    isliability:false,
    isproperty:true,
    isemployee:false,
  };
  old_pol.push(pol);
 // console.log(old_pol);
  var obj=this.authService.make_obj(old_pol);
    localStorage.setItem(username,JSON.stringify(obj));

  //console.log(JSON.parse(localStorage.getItem(username)));
  }

  make_employee(username,comp,mob,numpep,cityy)
  { //console.log(JSON.parse(localStorage.getItem(username)));
     var r=JSON.parse(localStorage.getItem(username));
    var old_pol=r.policies;
    var pol={
      id:old_pol.length,
      claim:'claimed',
      isclaim:true,
      company:comp,
    mobile:mob,
    num_people:numpep,
    city:cityy,
    istravel:false,
    isvehicle:false,
    isincome:false,
    isliability:false,
    isproperty:false,
    isemployee:true,
  };
  old_pol.push(pol);
 // console.log(old_pol);
  var obj=this.authService.make_obj(old_pol);
    localStorage.setItem(username,JSON.stringify(obj));

  //console.log(JSON.parse(localStorage.getItem(username)));
  }

  make_income(username,occu,mob,gen,age,incy,cityy)
  { //console.log(JSON.parse(localStorage.getItem(username)));
     var r=JSON.parse(localStorage.getItem(username));
    var old_pol=r.policies;
    var pol={
      id:old_pol.length,
      claim:'claimed',
      isclaim:true,
    occupation:occu,
    mobile:mob,
    age:age,
    gender:gen,
    income_year:incy,
    city:cityy,
    istravel:false,
    isvehicle:false,
    isincome:true,
    isliability:false,
    isproperty:false,
    isemployee:false,
  };
  old_pol.push(pol);
 // console.log(old_pol);
  var obj=this.authService.make_obj(old_pol);
    localStorage.setItem(username,JSON.stringify(obj));

  //console.log(JSON.parse(localStorage.getItem(username)));
  }

  get_policies()
  {
    return JSON.parse(localStorage.getItem(this.authService.cur_user));
  }
}
