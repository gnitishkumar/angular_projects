import { NewsComponent } from './news/news.component';
import { UpdprofileComponent } from './updprofile/updprofile.component';
import { ExchRatesComponent } from './exch-rates/exch-rates.component';
import { HomeComponent } from './home/home.component';
import { WeatherComponent } from './weather/weather.component';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';




const routes: Routes = [
  {path: 'login',component: LoginComponent },
  {path: 'register',component:  RegisterComponent},
  {path: 'news',component:  NewsComponent},
  {path: 'home/profile',component: ViewprofileComponent },
  {path: 'home/profile/updprof',component: UpdprofileComponent },
  {path: 'home',component: HomeComponent },
  {path: 'home/weather',component: WeatherComponent },
  {path: 'home/exrates',component: ExchRatesComponent },
  {path:'',redirectTo: '/login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
