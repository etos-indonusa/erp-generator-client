import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreTransferItemRoutingModule } from './store-transfer-item-routing.module';
import { StoreTransferItemListComponent } from './store-transfer-item-list/store-transfer-item-list.component';
import { StoreTransferItemShareModule } from './store-transfer-item-share/store-transfer-item-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    StoreTransferItemListComponent
  ],
  imports: [
    CommonModule,
    StoreTransferItemRoutingModule,
    StoreTransferItemShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class StoreTransferItemModule { }
