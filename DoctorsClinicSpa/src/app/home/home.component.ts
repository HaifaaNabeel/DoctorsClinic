import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  model:any={};
  authSerives: any;
  signupMode:boolean=false;
  loginMode:boolean=false;
  constructor() { }

  ngOnInit() {
  }
  signupToggle(){
    this.loginMode=false;
    this.signupMode=!this.signupMode;
    

  }
  loginToggle(){
    this.loginMode=!this.loginMode;
    this.signupMode=false;
  }

  loggedIn(){
    const token=localStorage.getItem('token');
    return !! token 
    
   }
 
   loggedOut(){
     localStorage.removeItem('token');
     console.log("You are logged out ")
   }
}
