import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BillService, AlertService, ClerkService, ItemService } from '@app/_services';
import { first } from 'rxjs/operators';

@Component({templateUrl: 'add-edit.component.html'})
export class AddEditComponent implements OnInit { 
    form: FormGroup;
    id: string;
    isAddMode: boolean;
    loading = false;
    submitted = false;
    clerks = null;   
    items = null; 

    selectedItem = {
        id: null,
        name: null,
        price: null,
        discounted: false,
        discountPercentage: null,
        quantity: null
    }

    orderObj = {
        itemList : []
    }    

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private billService: BillService,
        private alertService: AlertService,
        private clerkService: ClerkService,
        private itemService: ItemService
    ) {}

    ngOnInit() {
        this.id = this.route.snapshot.params['id'];
        
        this.isAddMode = !this.id;

        this.getAllClerks();

        this.getAllItems();        

        this.form = this.formBuilder.group({
            clerk: this.formBuilder.group({
                id: ['', Validators.required]
            }),
            itemList: this.formBuilder.array([])              
        });
    }

    // convinience getter for easy access to form fields
    get f() { return this.form.controls; }

    getAllClerks() {
        this.clerkService.getAll()
        .pipe(first())
        .subscribe(
            clerks => {
                this.clerks = clerks; 
            }
        )
    }

    getAllItems() {
        this.itemService.getAll()
        .pipe(first())
        .subscribe(
            items => {
                this.items = items;                
                this.selectedItem.id = this.items[0].id
                this.selectedItem.name = this.items[0].name
                this.selectedItem.price = this.items[0].price
                this.selectedItem.discounted = this.items[0].discounted
                this.selectedItem.discountPercentage = this.items[0].discountPercentage                
            }
        )
    }

    onSubmit() {
        this.submitted = true;

        //reset alerts on submit
        this.alertService.clear();

        // console.info('orderItems ', this.orderObj.itemList)

        this.form.setControl('itemList', this.formBuilder.array(this.orderObj.itemList || []) )

        console.info('this.form ', this.form)

        // stop here if form is invalid
        if(this.form.invalid) {            
            return;
        }

        this.loading = true;
        if(this.isAddMode){
            this.createBill();
        }else{
            this.updateBill();
        }
    }

    changeValue1(e){
        console.info('e1 ', e)
    }

    changeValue2(e){
        // console.info('e2 ', e)        
        this.items.some( i => {
            if(i.id == e){
                this.selectedItem.id = i.id
                this.selectedItem.name = i.name
                this.selectedItem.price = i.price
                this.selectedItem.discounted = i.discounted
                this.selectedItem.discountPercentage = i.discountPercentage
                
            }
        })        
    }

    addItemList() {
        event.preventDefault()                
        this.orderObj.itemList.push(JSON.parse(JSON.stringify(this.selectedItem)))        
    }

    private createBill() {
        this.billService.createBill(this.form.value).pipe(first())
        .subscribe(
            data => {
                this.alertService.success("Bill added successfully", { keepAfterRouteChange: true});
                console.info('this.route ', this.route)
                this.router.navigate(['.', { relativeTo: this.route }]);
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            }
        )
    }

    private updateBill() {
        this.billService.updateBill(this.id, this.form.value)
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