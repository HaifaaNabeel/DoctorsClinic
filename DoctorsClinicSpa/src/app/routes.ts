import { Route, Router, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { DoctorLisComponent } from "./doctorLis/doctorLis.component";
import { DoctorDitailsComponent } from "./doctorDitails/doctorDitails.component";
import { BookingListComponent } from "./bookingList/bookingList.component";
import { BookingDetailsComponent } from "./bookingDetails/bookingDetails.component";
import { GetBookComponent } from "./getBook/getBook.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { ProfileComponent } from "./profile/profile.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { AuthUsersGuard } from "./_guards/auth-users.guard";

export const appRoutes: Routes =
    [

        { path: '', component: HomeComponent },
        { path: 'Home', component: HomeComponent },
        //{path:'DoctorsList',component:DoctorLisComponent,canActivate:[AuthUsersGuard]},
        {
            path: '',
            runGuardsAndResolvers:'always',
            canActivate:[AuthUsersGuard],
            children:[
                {path:'DoctorsList',component:DoctorLisComponent},
                { path: 'DoctorDetails', component: DoctorDitailsComponent },
                { path: 'BookingList', component: BookingListComponent },
                { path: 'BookingDetails', component: BookingDetailsComponent },
                { path: 'GetBook', component: GetBookComponent },
                { path: 'Profile', component: ProfileComponent },

            ],
        },
        { path: 'About', component: AboutComponent },
        { path: 'Contact', component: ContactComponent },
        { path: 'Login', component: LoginComponent },
        { path: 'Signup', component: SignupComponent },
        {path:'',component:HomeComponent},
        { path: '**', redirectTo: '', pathMatch: 'full' }

    ];