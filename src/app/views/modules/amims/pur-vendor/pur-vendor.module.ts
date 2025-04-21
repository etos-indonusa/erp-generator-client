import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurVendorRoutingModule } from './pur-vendor-routing.module';
import { PurVendorListComponent } from './pur-vendor-list/pur-vendor-list.component';
import { PurVendorShareModule } from './pur-vendor-share/pur-vendor-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    PurVendorListComponent
  ],
  imports: [
    CommonModule,
    PurVendorRoutingModule,
    PurVendorShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class PurVendorModule { }
