import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShippingRoutingModule } from './shipping-routing.module';
import { ShippingListComponent } from './shipping-list/shipping-list.component';
import { ShippingShareModule } from './shipping-share/shipping-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    ShippingListComponent
  ],
  imports: [
    CommonModule,
    ShippingRoutingModule,
    ShippingShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class ShippingModule { }
