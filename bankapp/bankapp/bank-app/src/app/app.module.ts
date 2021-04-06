import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './auth.service';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { WeatherComponent } from './weather/weather.component';
import { ExchRatesComponent } from './exch-rates/exch-rates.component';
import { HomeComponent } from './home/home.component';
import { UpdprofileComponent } from './updprofile/updprofile.component';
import { NewsComponent } from './news/news.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ViewprofileComponent,
    WeatherComponent,
    ExchRatesComponent,
    HomeComponent,
    UpdprofileComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
