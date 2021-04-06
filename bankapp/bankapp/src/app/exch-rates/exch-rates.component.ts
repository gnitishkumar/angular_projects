import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exch-rates',
  templateUrl: './exch-rates.component.html',
  styleUrls: ['./exch-rates.component.css']
})
export class ExchRatesComponent implements OnInit {
  fromValue='';
  toValue='';
  amt=0;
  ans=0;

  constructor() { }

  ngOnInit(): void {
    //this.getExch();
  }
  getExch(from,to){
    fetch('https://api.exchangeratesapi.io/latest?base='+from)
    .then(response=>response.json())
    .then(data=>{this.setExch(data);})


  }
  setExch(data)
  { console.log(data);

    let val=this.toValue;
    //console.log(data.rates[val]);
    //console.log(val);
    this.ans=(data.rates[val])*this.amt;
    (<HTMLInputElement>document.getElementsByClassName("result")[0]).value=this.ans+"";
  }
  onexch(form)
  { this.fromValue=form.from;
    this.toValue=form.to;
    console.log(this.fromValue+" "+this.toValue);
    this.amt=form.amount;
    this.getExch(this.fromValue,this.toValue);
  }
}
