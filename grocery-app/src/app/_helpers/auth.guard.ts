import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AccountService } from '@app/_services';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private accountService: AccountService
    ){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        const user = this.accountService.userValue;
        // const token = this.accountService.getToken();
        console.info('user ', user)
        // console.info('token ', token)
        if(user){
            //authorized return true
            return true;
        }

        // not logged in so redirect to login page with return url
        this.router.navigate(['/account/login'], {queryParams: {returnUrl: state.url}})
        return false;
    }
}