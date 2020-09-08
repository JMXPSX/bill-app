import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutComponent } from '@app/clerks/layout.component';
import { ListComponent } from './list.component';
import { ClerksRoutingModule } from './clerks-routing.module';
import { AddEditComponent } from './add-edit.component';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ClerksRoutingModule
    ],
    declarations: [
        LayoutComponent,
        ListComponent,
        AddEditComponent
    ]
})
export class ClerksModule { }