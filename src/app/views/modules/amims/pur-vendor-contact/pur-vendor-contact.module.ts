import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurVendorContactRoutingModule } from './pur-vendor-contact-routing.module';
import { PurVendorContactListComponent } from './pur-vendor-contact-list/pur-vendor-contact-list.component';
import { PurVendorContactShareModule } from './pur-vendor-contact-share/pur-vendor-contact-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    PurVendorContactListComponent
  ],
  imports: [
    CommonModule,
    PurVendorContactRoutingModule,
    PurVendorContactShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class PurVendorContactModule { }
