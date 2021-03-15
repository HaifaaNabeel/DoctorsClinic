import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt/src/jwthelper.service';
import { AuthService } from './_services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  
  jwtHelper = new JwtHelperService();
  constructor(private authSerives :AuthService) { }

  ngOnInit() {
    const token=localStorage.getItem('token');
    this.authSerives.decodedToken=this.jwtHelper.decodeToken(token); // the name of token globle of all project 
  }

}
