import { Router } from '@angular/router';
import { AccountService } from '@app/_services';
import { Component } from '@angular/core';

@Component({templateUrl: 'layout.component.html'})
export class LayoutComponent {
    constructor(
        private router: Router,
        private accountService: AccountService
    ){
        //redirect to home if already logged in
        // if(this.accountService.userValue){
        //     this.router.navigate(['/'])
        // }
        if(this.accountService.tokenValue){
            this.router.navigate(['/'])
        }
    }
}