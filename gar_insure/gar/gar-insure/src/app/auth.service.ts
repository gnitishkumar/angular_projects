import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {

  }
  public usernam:string='';
  public password:string='';
  public email:string='';
  public state:string='';
  public address:string='';
  public mobile:number=null;
  public zipcode:number=null;
  public city:string='';
  isRegistered=false;
  isLogged=false;
  uniqKey:number=null;
  cur_user=null;

  logged(username,password)
  {  for(let i=0;i<localStorage.length;i++)
    { let p=localStorage.key(i);
      let r=JSON.parse(localStorage.getItem(p));
      if(username==p&&r.password==password)
      {  this.isLogged=true;
        this.cur_user=username;
        this.usernam=username;
    this.password=r.password;
    this.email=r.email;
    this.mobile=r.mobile;
    this.state=r.state;
    this.address=r.address;
    this.city=r.city;
        this.uniqKey=i;
          break;
      }
    }

  }
  registering(username,passwor,emai,mob,stat,addres,cityy)
  { this.usernam=username;
    this.password=passwor;
    this.email=emai;
    this.mobile=mob;
    this.state=stat;
    this.address=addres;
    this.city=cityy;

    var user={
    password:passwor,
    email:emai,
    mobile:mob,
    state:stat,
    address:addres,
    city:cityy,
    policies:[]
  };
    localStorage.setItem(username,JSON.stringify(user));
    this.cur_user=username;
    this.isRegistered=true;
  //console.log(user);
  }
  updating(username,passwor,emai,mob,stat,addres,cityy)
  { for(let i=0;i<localStorage.length;i++)
    {  if(i==this.uniqKey)
      {let p=localStorage.key(i);
        localStorage.removeItem(p);
        break;
      }
    }
    var user={
    password:passwor,
    email:emai,
    mobile:mob,
    state:stat,
    address:addres,
    city:cityy,
    policies:[]
  };
  this.cur_user=username;
    localStorage.setItem(username,JSON.stringify(user));
    this.logged(username,passwor);

  //console.log(user);
  }
  make_obj(old)
  { var user={
    password:this.password,
    email:this.email,
    mobile:this.mobile,
    state:this.state,
    address:this.address,
    city:this.city,
    policies:old
  };
    return user;
  }
}
