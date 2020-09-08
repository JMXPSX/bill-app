import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
// import { UserModel } from '../../models/user.model';
import { AuthenticationService } from '../../_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // username: string
  // password: string
  // errorMessage = 'Invalid Credentials'
  // successMessage: string
  // invalidLogin = false
  // loginSuccess = false

  // user: UserModel;

  constructor(    
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
    // this.user = new UserModel();
  }

  // handleLogin(){
  //   this.authenticationService.executeJWTAuthenticationService(this.username, this.password).subscribe((result) => {
  //    this.invalidLogin = false;
  //    this.loginSuccess = true;
  //    this.successMessage = 'Login Successful'
  //    this.router.navigate(['/dashboard'])

  //   }, () => {
  //     this.invalidLogin = true;
  //     this.loginSuccess = false;

  //   })
  // }

  login(loginForm: NgForm) {
    // if (loginForm.invalid) {
    //   return;
    // }
    // console.log(loginForm.value);
    // this.authenticationService.executeJWTAuthenticationService(this.user.username, this.user.password).subscribe(
    //   (data) => {
    //     console.log(data);
    //     this.router.navigateByUrl('/dashboard');
    //   },
    //   (err) => {
    //     console.log(err);
    //   }
    // )
  }

}
