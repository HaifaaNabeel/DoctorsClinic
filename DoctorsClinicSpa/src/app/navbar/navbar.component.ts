import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  model:any={};
  authSerives: any;
  signupMode:boolean=false;
  loginMode:boolean=false;
  homeMode:boolean=true;
  constructor() { }

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
    const token=localStorage.getItem('token');
    return !! token 
    
   }
 
   loggedOut(){
     localStorage.removeItem('token');
     console.log("You are logged out ")
   }
   homeToggle(){
    this.loginMode=false;
    this.signupMode=false;
    this.homeMode=true;
   }

}
