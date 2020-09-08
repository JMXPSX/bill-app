import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutComponent } from '@app/items/layout.component';
import { ListComponent } from './list.component';
import { ItemsRoutingModule } from './items-routing.module';
import { AddEditComponent } from './add-edit.component';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ItemsRoutingModule
    ],
    declarations: [
        LayoutComponent,
        ListComponent,
        AddEditComponent
    ]
})
export class ItemsModule { }