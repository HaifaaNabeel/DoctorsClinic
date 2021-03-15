import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule  } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { CarouselModule } from 'ngx-bootstrap';


import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { DoctorDitailsComponent } from './doctorDitails/doctorDitails.component';
import { DoctorLisComponent } from './doctorLis/doctorLis.component';
import { BookingListComponent } from './bookingList/bookingList.component';
import { BookingDetailsComponent } from './bookingDetails/bookingDetails.component';
import { GetBookComponent } from './getBook/getBook.component';

@NgModule({
  declarations: [										
    AppComponent,
      UserComponent,
      NavbarComponent,
      SignupComponent,
      LoginComponent,
      HomeComponent,
      DoctorDitailsComponent,
      DoctorLisComponent,
      BookingListComponent,
      BookingDetailsComponent,
      GetBookComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CarouselModule.forRoot()
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
