import { UpdProfComponent } from './upd-prof/upd-prof.component';
import { CustCareComponent } from './cust-care/cust-care.component';
import { ClaimsComponent } from './claims/claims.component';
import { ReqClaimComponent } from './req-claim/req-claim.component';
import { PropertyComponent } from './property/property.component';
import { EmployeeComponent } from './employee/employee.component';
import { IncomeComponent } from './income/income.component';
import { LiabilityComponent } from './liability/liability.component';
import { TravelComponent } from './travel/travel.component';
import { PoliciesComponent } from './policies/policies.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
     //import {UpdProfComponent}


const routes: Routes = [
  {path: 'login',component: LoginComponent },
  {path: 'home',component: HomeComponent },
  {path: 'home/vehicle',component: VehicleComponent },
  {path: 'home/customer-care',component: CustCareComponent },
  {path: 'home/claims',component: ClaimsComponent },
  {path: 'home/req-claim',component: ReqClaimComponent },
  {path: 'home/travel',component: TravelComponent },
  {path: 'home/liability',component: LiabilityComponent },
  {path: 'home/income',component: IncomeComponent },
  {path: 'home/employee',component: EmployeeComponent },
  {path: 'home/property',component: PropertyComponent },
  {path: 'home/profile',component: ProfileComponent },
  {path: 'home/profile/updprof',component: UpdProfComponent },
  {path: 'home/policies',component: PoliciesComponent },
  {path: 'signup',component: SignupComponent },
   {path:'',redirectTo: '/login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
