import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QaTransferRoutingModule } from './qa-transfer-routing.module';
import { QaTransferListComponent } from './qa-transfer-list/qa-transfer-list.component';
import { QaTransferShareModule } from './qa-transfer-share/qa-transfer-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    QaTransferListComponent
  ],
  imports: [
    CommonModule,
    QaTransferRoutingModule,
    QaTransferShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class QaTransferModule { }
