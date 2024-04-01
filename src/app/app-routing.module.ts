import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingsComponent } from './bookings/bookings.component';

import { CreateBookingComponent } from './create-booking/create-booking.component';

const routes: Routes = [
  {path:"booking-list",component:BookingsComponent},
  {path:"create-booking", component:CreateBookingComponent},
  {path:"edit-booking/:id",component:CreateBookingComponent},
  {path:"",redirectTo:"booking-list",pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
