import { Component, OnInit } from '@angular/core';
import { ItemService } from '@app/_services';
import { first } from 'rxjs/operators';

@Component({templateUrl: 'list.component.html'})
export class ListComponent implements OnInit {
    items = null;

    constructor(private itemService: ItemService) {}

    ngOnInit() {
        this.itemService.getAll()
        .pipe(first())
        .subscribe(
            items => {
                this.items = items;
                console.info('this.items ', this.items)
            }
        )
    }

    deleteItem(id: string) {
        const item = this.items.find(x => x.id === id);
        item.isDeleting = true;
        this.itemService.deleteItem(id)
        .pipe(first())
        .subscribe(() => {
            this.items = this.items.filter(x => x.id !== id)
        });
    }

}