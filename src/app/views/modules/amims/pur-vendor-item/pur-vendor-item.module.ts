import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurVendorItemRoutingModule } from './pur-vendor-item-routing.module';
import { PurVendorItemListComponent } from './pur-vendor-item-list/pur-vendor-item-list.component';
import { PurVendorItemShareModule } from './pur-vendor-item-share/pur-vendor-item-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    PurVendorItemListComponent
  ],
  imports: [
    CommonModule,
    PurVendorItemRoutingModule,
    PurVendorItemShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class PurVendorItemModule { }
