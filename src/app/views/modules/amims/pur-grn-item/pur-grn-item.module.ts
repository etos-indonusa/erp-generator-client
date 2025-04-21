import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurGrnItemRoutingModule } from './pur-grn-item-routing.module';
import { PurGrnItemListComponent } from './pur-grn-item-list/pur-grn-item-list.component';
import { PurGrnItemShareModule } from './pur-grn-item-share/pur-grn-item-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    PurGrnItemListComponent
  ],
  imports: [
    CommonModule,
    PurGrnItemRoutingModule,
    PurGrnItemShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class PurGrnItemModule { }
