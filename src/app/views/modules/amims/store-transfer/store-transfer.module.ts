import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreTransferRoutingModule } from './store-transfer-routing.module';
import { StoreTransferListComponent } from './store-transfer-list/store-transfer-list.component';
import { StoreTransferShareModule } from './store-transfer-share/store-transfer-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    StoreTransferListComponent
  ],
  imports: [
    CommonModule,
    StoreTransferRoutingModule,
    StoreTransferShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class StoreTransferModule { }
