import { AuthService } from './auth.service';
import { ReqClaimComponent } from './req-claim/req-claim.component';
import {MatStepperModule} from '@angular/material/stepper';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { PoliciesComponent } from './policies/policies.component';
import { ClaimsComponent } from './claims/claims.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { TravelComponent } from './travel/travel.component';
import { IncomeComponent } from './income/income.component';
import { CustCareComponent } from './cust-care/cust-care.component';
import { LiabilityComponent } from './liability/liability.component';
import { PropertyComponent } from './property/property.component';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { UpdProfComponent } from './upd-prof/upd-prof.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    PoliciesComponent,
    ClaimsComponent,
    VehicleComponent,
    TravelComponent,
    IncomeComponent,
    ReqClaimComponent,
    CustCareComponent,
    LiabilityComponent,
    PropertyComponent,
    EmployeeComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    UpdProfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [{ provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
