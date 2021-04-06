import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  mArticles:Array<any>;
  constructor() { }

  ngOnInit(): void {
    this.getData();
  }
  getData(){
    fetch('http://newsapi.org/v2/everything?q="insurance"&from=2020-09-01&sortBy=publishedAt&apiKey=a73f89e1a9d84bb085931107979ff0f2')
    .then(response=>response.json())
    .then(data=>{this.mArticles=data['articles'];})


  }

}
