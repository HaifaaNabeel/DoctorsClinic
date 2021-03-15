import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  jwtHelper = new JwtHelperService();
  originalUrl="http://localhost:5000/api/auth/"
  decodedToken:any;
  constructor(private http:HttpClient) { }

login( model:any ){
  return this.http.post(this. originalUrl +'login',model ).pipe(
    map(( response:any )=>{ //get  data and give  maping it 
      const user =response; //take token of login 
      if (user){localStorage.setItem('token',user.token);} 
    this.decodedToken=this.jwtHelper.decodeToken(user.token)
    console.log(this.decodedToken)
  })
  )
} //save token

signup(model:any){
  return this.http.post(this. originalUrl +'register',model );
  }

  loggedIn(){ // for take token 
    try {
      const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);

    } catch (error) {
      return false;
    }
    
 }/*  */
}
