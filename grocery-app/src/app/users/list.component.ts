import { Component, OnInit } from '@angular/core';
import { AccountService } from '@app/_services';

@Component({templateUrl: 'list.component.html'})
export class ListComponent implements OnInit {
    users = null;

    constructor(private accountService: AccountService) {}

    ngOnInit() {

    }

    deleteUser() {
        
    }

}