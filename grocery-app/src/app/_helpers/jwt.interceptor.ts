import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AccountService } from '@app/_services';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private accountService: AccountService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        //add auth header with jwt if user is logged in and request us to the api url
        const user = this.accountService.userValue;
        // debugger;

        // const isLoggedIn = user && user.token;
        const token = this.accountService.tokenValue;
        const isLoggedIn = user && token;
        
        // const isLoggedIn = this.accountService.isLoggedIn
        
        // const isApiUrl = request.url.startsWith(environment.apiUrl);   
        const isApiUrl = request.url.indexOf('authenticate') === -1; 

        // console.info('isLoggedIn ', isLoggedIn) 
        // console.info('isApiUrl ', isApiUrl) 
        
        if(isLoggedIn && isApiUrl){
            
            request = request.clone({
                setHeaders: {
                    Authorization: `${token}`
                }
            });
            
        }
        
        return next.handle(request);
    }

}

// intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{

//     let basicAuthHeaderString = this.authenticationService.getAuthenticatedToken();
    
//     if(this.authenticationService.isLoggedIn && req.url.indexOf('authenticate') === -1) {
//       req = req.clone({
//         setHeaders: {
//           Authorization: basicAuthHeaderString
//         }
//       })
      
//     }
    
//     return next.handle(req)
    
//   }