import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { error } from 'protractor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  model: any = {};
  constructor(private authService:AuthService,private route:Router) { }

  ngOnInit() {
  }

  signup(){
    /* console.log(this.model) */
    this.authService.signup(this.model).subscribe(
      ()=>{ console.log("You are signup ")},
      error=> console.log(error),
      ()=>{this.route.navigate(['/Home'])}

    )
  }

}
