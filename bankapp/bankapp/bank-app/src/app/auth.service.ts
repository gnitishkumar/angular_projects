import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  isRegistered=false;
  isLogged=false;
  uniqKey:number=null;
  logged(username,password)
  {  for(let i=0;i<localStorage.length;i++)
    { let p=localStorage.key(i);
      let r=JSON.parse(localStorage.getItem(p));
      if(username==p&&r.password==password)
      {  this.isLogged=true;
        this.uniqKey=i;
          break;
      }
    }

  }
  registering(username,passwor,emai,mob,stat,addres,cityy)
  {
    var user={
    password:passwor,
    email:emai,
    mobile:mob,
    state:stat,
    address:addres,
    city:cityy
  };
    localStorage.setItem(username,JSON.stringify(user));
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
    city:cityy
  };
    localStorage.setItem(username,JSON.stringify(user));
    this.logged(username,passwor);

  //console.log(user);
  }
}
