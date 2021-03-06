import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  model:any={};
  //authSerives: any;
  signupMode:boolean=false;
  loginMode:boolean=false;
  homeMode:boolean=true;
  constructor(public authSerives:AuthService,private route:Router) { }

  ngOnInit() {
  } 

 /*  login(){
    //console.log(this.model)
    this.authSerives.login(this.model).subscribe(
      next=>{console.log("you are loggedIn")},
      error=>{console.log('you are not login ')}
    )
  } */

  signupToggle(){
    this.loginMode=false;
    this.homeMode=false;
    this.signupMode=!this.signupMode;

    

  }
  loginToggle(){
    this.loginMode=!this.loginMode;
    this.signupMode=false;
    this.homeMode=false;

  }

  loggedIn(){
   /* const token=localStorage.getItem('token');
    return !! token  */
     return this.authSerives.loggedIn();
    
   }
 
   loggedOut(){
     localStorage.removeItem('token');
     console.log("You are logged out ");
     this.route.navigate(['/Home']);
   }
   homeToggle(){
    this.loginMode=false;
    this.signupMode=false;
    this.homeMode=true;
   }

}
