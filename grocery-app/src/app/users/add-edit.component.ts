import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({templateUrl: 'add-edit.component.html'})
export class AddEditComponent implements OnInit {
    form: FormGroup;
    id: string;
    isAddMode: boolean;
    loading = false;
    submitted = false;

    constructor() {}

    ngOnInit() {

    }

    onSubmit() {

    }

    private createUser() {

    }

    private updateUser() {
        
    }
}