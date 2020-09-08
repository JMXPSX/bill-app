import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { API_URL } from '../app.constant';
import { BehaviorSubject } from 'rxjs';

export const TOKEN = 'token'
export const AUTHENTICATED_USER = 'authenticateUser' 

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  // BASE_PATH: 'http://localhost:8080'
  // USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'

  public username: String;
  public password: String;
  private token: string;
  // Use Subject to check if the user is loggedIn
  private loggedIn: BehaviorSubject<boolean>;

  constructor(private http: HttpClient) { 
    this.token = this.getToken();
    this.loggedIn = new BehaviorSubject<boolean>(false);
  }

  executeJWTAuthenticationService(username, password) {

    return this.http.post<any>(
      `${API_URL}/authenticate`, {
        username,
        password
      }).pipe(
        map(
          data => {
            this.token = data.token
            console.info('token ', this.token)
            sessionStorage.setItem(AUTHENTICATED_USER, username)
            sessionStorage.setItem(TOKEN, `Bearer ${data.token}`)
            
            return data
          }
          
        )
        
      )

  }

  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER)
  }

  getAuthenticatedToken(){
    if(this.getAuthenticatedUser())
      return sessionStorage.getItem(TOKEN)
  }

  logout(){
    sessionStorage.removeItem(TOKEN)
    sessionStorage.removeItem(AUTHENTICATED_USER)
    this.username = null
    this.password = null
  }

  // isUserLoggedIn() {
  //   let user = sessionStorage.getItem(AUTHENTICATED_USER)

  //   return !(user === null)
  // }

  getToken() {
    return sessionStorage.getItem('TOKEN') ? sessionStorage.getItem('TOKEN') : '';
  }

  get isLoggedIn(){
    this.isAuthenticated();
    return this.loggedIn.asObservable();
  }

  isAuthenticated() {
    console.info('token ', this.getAuthenticatedToken())
    // if (this.token.length < 2) {
    //   console.info(1111)
    //   return this.loggedIn.next(false);
    // }else{
    //   console.info(222)
    //   return this.loggedIn.next(true);
    // }
    if(this.getAuthenticatedToken()){
      return this.loggedIn.next(true);
    }
    return this.loggedIn.next(false);
  }

}
