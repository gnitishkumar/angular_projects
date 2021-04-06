import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  WeatherData:any;
  constructor() { }

  ngOnInit() {
    this.WeatherData = {
      main : {},
      isDay: true
    };
    this.getWeatherData();
    //console.log(this.WeatherData);
  }

  getWeatherData(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=hyderabad&appid=ff1bc4683fc7325e9c57e586c20cc03e')
    .then(response=>response.json())
    .then(data=>{this.setWeatherData(data);})


  }

  setWeatherData(data){
   // this.WeatherData = data;
   console.log(data);
    let sunsetTime = new Date(data.sys.sunset * 1000);
    this.WeatherData.sunset_time = sunsetTime.toLocaleTimeString();
    let currentDate = new Date();
    this.WeatherData.isDay = (currentDate.getTime() < sunsetTime.getTime());
    this.WeatherData.name=data.name;
    this.WeatherData.temp_celcius = (data.main.temp - 273.15).toFixed(0);
    this.WeatherData.temp_min = (data.main.temp_min - 273.15).toFixed(0);
    this.WeatherData.temp_max = (data.main.temp_max - 273.15).toFixed(0);
    this.WeatherData.temp_feels_like = (data.main.feels_like - 273.15).toFixed(0);//this.WeatherData.main
    this.WeatherData.humidity=data.main.humidity;
  }


}
