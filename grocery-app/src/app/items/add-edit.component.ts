import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService, AlertService } from '@app/_services';
import { first } from 'rxjs/operators';

@Component({templateUrl: 'add-edit.component.html'})
export class AddEditComponent implements OnInit {
    form: FormGroup;
    id: string;
    isAddMode: boolean;
    loading = false;
    submitted = false;
    isDiscounted = true;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private itemService: ItemService,
        private alertService: AlertService
    ) {}

    ngOnInit() {
        this.id = this.route.snapshot.params['id'];
        console.info('this.id ', this.id)
        this.isAddMode = !this.id;

        this.form = this.formBuilder.group({
            name: ['', Validators.required],
            price: ['', Validators.required],
            discounted: [this.isDiscounted, Validators.required],
            discountPercentage: ['', Validators.required],
        });
    }

    // convinience getter for easy access to form fields
    get f() { return this.form.controls; }

    onSubmit() {
        this.submitted = true;

        //reset alerts on submit
        this.alertService.clear();

        // stop here if form is invalid
        if(this.form.invalid) {
            return;
        }

        this.loading = true;
        if(this.isAddMode){
            this.createUser();
        }else{
            this.updateUser();
        }
    }

    private createUser() {
        this.itemService.createItem(this.form.value).pipe(first())
        .subscribe(
            data => {
                this.alertService.success("Item added successfully", { keepAfterRouteChange: true});
                console.info('this.route ', this.route)
                this.router.navigate(['.', { relativeTo: this.route }]);
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            }
        )
    }

    private updateUser() {
        this.itemService.updateItem(this.id, this.form.value)
        .pipe(first())
        .subscribe(
            data => {
                this.alertService.success("Update successfully", { keepAfterRouteChange: true});
                this.router.navigate(['..', { relativeTo: this.route }]);
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            }
        );
    }
}