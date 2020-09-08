import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../auth.service'

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor{

  constructor(
    private authenticationService: AuthenticationService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{

    let basicAuthHeaderString = this.authenticationService.getAuthenticatedToken();
    
    if(this.authenticationService.isLoggedIn && req.url.indexOf('authenticate') === -1) {
      req = req.clone({
        setHeaders: {
          Authorization: basicAuthHeaderString
        }
      })
      
    }
    
    return next.handle(req)
    
  }

}




