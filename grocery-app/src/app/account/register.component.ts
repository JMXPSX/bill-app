import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({templateUrl: 'register.component.html'})
export class RegisterComponent implements OnInit {
    form: FormGroup;
    loading = false;
    submitted = false;

    constructor(){}

    ngOnInit() {

    }

    onSubmit(){

    }
}