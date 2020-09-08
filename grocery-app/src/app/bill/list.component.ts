import { Component, OnInit } from '@angular/core';
import { BillService } from '@app/_services';
import { first } from 'rxjs/operators';

@Component({templateUrl: 'list.component.html'})
export class ListComponent implements OnInit { 
    bills = null;

    constructor(private billService: BillService) {}

    ngOnInit() {
        this.billService.getAll()
        .pipe(first())
        .subscribe(
            bills => {
                
                this.bills = bills;
                console.info('this.bills ', this.bills)
                
            }
        )
    }

    deleteBill(id: string) {
        const bill = this.bills.find(x => x.id === id);
        bill.isDeleting = true;
        this.billService.deleteBill(id)
        .pipe(first())
        .subscribe(() => {
            this.bills = this.bills.filter(x => x.id !== id)
        });
    }

}