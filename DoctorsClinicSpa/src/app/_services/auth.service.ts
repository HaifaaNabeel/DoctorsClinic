import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  originalUrl="http://localhost:5000/api/auth/"
constructor(private http:HttpClient) { }
login( model:any ){
  return this.http.post(this. originalUrl +'login',model ).pipe(
    map(( response:any )=>{ //get  data and give  maping it 
      const user =response; //take token of login 
      if (user){localStorage.setItem('token',user.token);} 
    })
  )
} //save token

signup(model:any){
  return this.http.post(this. originalUrl +'register',model );
  }
}
