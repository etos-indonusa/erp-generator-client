import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurReturnItemRoutingModule } from './pur-return-item-routing.module';
import { PurReturnItemListComponent } from './pur-return-item-list/pur-return-item-list.component';
import { PurReturnItemShareModule } from './pur-return-item-share/pur-return-item-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    PurReturnItemListComponent
  ],
  imports: [
    CommonModule,
    PurReturnItemRoutingModule,
    PurReturnItemShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class PurReturnItemModule { }
