import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogTransferRoutingModule } from './log-transfer-routing.module';
import { LogTransferListComponent } from './log-transfer-list/log-transfer-list.component';
import { LogTransferShareModule } from './log-transfer-share/log-transfer-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    LogTransferListComponent
  ],
  imports: [
    CommonModule,
    LogTransferRoutingModule,
    LogTransferShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class LogTransferModule { }
