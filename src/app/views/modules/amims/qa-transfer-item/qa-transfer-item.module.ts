import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QaTransferItemRoutingModule } from './qa-transfer-item-routing.module';
import { QaTransferItemListComponent } from './qa-transfer-item-list/qa-transfer-item-list.component';
import { QaTransferItemShareModule } from './qa-transfer-item-share/qa-transfer-item-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    QaTransferItemListComponent
  ],
  imports: [
    CommonModule,
    QaTransferItemRoutingModule,
    QaTransferItemShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class QaTransferItemModule { }
