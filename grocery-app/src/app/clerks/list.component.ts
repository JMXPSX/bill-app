import { Component, OnInit } from '@angular/core';
import { ClerkService } from '@app/_services';
import { first } from 'rxjs/operators';

@Component({templateUrl: 'list.component.html'})
export class ListComponent implements OnInit {
    clerks = null;

    constructor(private clerkService: ClerkService) {}

    ngOnInit() {
        this.clerkService.getAll()
        .pipe(first())
        .subscribe(
            clerks => {
                this.clerks = clerks;    
                console.info('this.clerks ', this.clerks)            
            }
        )
    }

    deleteClerk(id: string) {
        const clerk = this.clerks.find(x => x.id === id);
        clerk.isDeleting = true;
        this.clerkService.deleteClerk(id)
        .pipe(first())
        .subscribe(() => {
            this.clerks = this.clerks.filter(x => x.id !== id)
        });
    }

}