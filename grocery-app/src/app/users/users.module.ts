import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutComponent } from '@app/users/layout.component';
import { ListComponent } from './list.component';
import { UsersRoutingModule } from './users-routing.module';
import { AddEditComponent } from './add-edit.component';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        UsersRoutingModule
    ],
    declarations: [
        LayoutComponent,
        ListComponent,
        AddEditComponent
    ]
})
export class UsersModule { }