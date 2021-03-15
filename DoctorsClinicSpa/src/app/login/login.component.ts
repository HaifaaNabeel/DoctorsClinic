import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
model :any={};
  constructor(private authSerives :AuthService) { }

  ngOnInit() {
  }
  login(){
    //console.log(this.model)
    this.authSerives.login(this.model).subscribe(
      next=>{console.log("you are loggedIn")},
      error=>{console.log('you are not login ')}
    )
  }

   loggedIn(){
    /*const token=localStorage.getItem('token');
   return !!token */
   return this.authSerives.loggedIn();
 
   
  } /**/

   /*loggedOut(){
    localStorage.removeItem('token');
    console.log("You are logged out ")
  } */
}
