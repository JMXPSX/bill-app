import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { API_URL } from '../app.constant';
import { map } from 'rxjs/operators';

import { User } from '@app/_models';
import { Router } from '@angular/router';

export const TOKEN = 'token'
export const AUTHENTICATED_USER = 'authenticateUser' 

@Injectable({
    providedIn: 'root'
  })
export class AccountService {
    // private userSubject: BehaviorSubject<User>;
    private userSubject: BehaviorSubject<String>;
    // public user: Observable<User>;
    public user: Observable<String>;

    private tokenSubject: BehaviorSubject<String>;
    private token: Observable<String>;
    // Use Subject to check if the user is loggedIn
    private loggedIn: BehaviorSubject<boolean>;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        // this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
        this.userSubject = new BehaviorSubject<String>(sessionStorage.getItem(AUTHENTICATED_USER));
        
        this.user = this.userSubject.asObservable();

        this.tokenSubject = new BehaviorSubject<String>(sessionStorage.getItem(TOKEN));
        
        this.token = this.tokenSubject.asObservable();
    }

    // public get userValue(): User {
    //     return this.userSubject.value;
    // }

    public get userValue(): String {
        return this.userSubject.value;
    }

    public get tokenValue(): String {
        return this.tokenSubject.value;
    }

    login(username: string, password: string){

        return this.http.post<User>(`${API_URL}/authenticate`, {username, password})
        .pipe(
            map(
                data => {
                    // this.token = data.token
                    console.info('data ', data)
                    // console.info('token ', this.token)
                    sessionStorage.setItem(AUTHENTICATED_USER, data.username)
                    sessionStorage.setItem(TOKEN, `Bearer ${data.token}`)
                    // localStorage.setItem('user', JSON.stringify(data))
                    this.userSubject.next(data.username)
                    this.tokenSubject.next(`Bearer ${data.token}`)

                    return data
                }
            )
        )

    }

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

    // executeJWTAuthenticationService(username, password) {

    //     return this.http.post<any>(
    //         `${API_URL}/authenticate`, {
    //         username,
    //         password
    //         }).pipe(
    //         map(
    //             data => {
    //             this.token = data.token
    //             console.info('token ', this.token)
    //             sessionStorage.setItem(AUTHENTICATED_USER, username)
    //             sessionStorage.setItem(TOKEN, `Bearer ${data.token}`)
                
    //             return data
    //             }
                
    //             )
            
    //         )
    
    // }

    getAuthenticatedUser() {
        return sessionStorage.getItem(AUTHENTICATED_USER)
      }

    getAuthenticatedToken(){
        if(this.getAuthenticatedUser())
          return sessionStorage.getItem(TOKEN)
      }

    get isLoggedIn(){
        this.isAuthenticated();
        return this.loggedIn.asObservable();
    }

    isAuthenticated() {
        // console.info('token ', this.getAuthenticatedToken())
        
        if(this.getAuthenticatedToken()){
          return this.loggedIn.next(true);
        }
        return this.loggedIn.next(false);
      }

    // getToken() {
    //     return sessionStorage.getItem('TOKEN') ? sessionStorage.getItem('TOKEN') : '';
    //     // return this.token;
    //   }

    logout(){
        sessionStorage.removeItem(TOKEN)
        sessionStorage.removeItem(AUTHENTICATED_USER)
        // localStorage.removeItem('user')
        this.userSubject.next(null)
        this.tokenSubject.next(null)
        // this.router.navigate(['/account/login'])
    }

    register(){

    }

    getAll(){

    }

    getById(){

    }

    update(){

    }

    delete(){
        
    }

}