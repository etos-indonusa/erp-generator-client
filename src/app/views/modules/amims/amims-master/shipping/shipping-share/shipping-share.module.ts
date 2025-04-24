import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShippingShareAddComponent } from './shipping-share-add/shipping-share-add.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { ShippingShareDetailComponent } from './shipping-share-detail/shipping-share-detail.component';
 
 
@NgModule({
    declarations: [
        ShippingShareAddComponent, 
        ShippingShareDetailComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AntSimpleModule,
        TampilanModule
    ]
}) 
export class ShippingShareModule { }
