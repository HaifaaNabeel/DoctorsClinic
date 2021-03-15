import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule  } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { CarouselModule } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';


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
import { appRoutes } from './routes';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthUsersGuard } from './_guards/auth-users.guard';

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
      GetBookComponent,
      AboutComponent,
      ContactComponent,
      ProfileComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CarouselModule.forRoot(),
    RouterModule.forRoot(appRoutes)

  ],
  providers: [
    AuthService,
    AuthUsersGuard
  ],
  bootstrap: [AppComponent] 
})
export class AppModule { }
