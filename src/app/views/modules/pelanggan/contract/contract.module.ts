import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractRoutingModule } from './contract-routing.module';
import { ContractListComponent } from './contract-list/contract-list.component';
import { ContractShareModule } from './contract-share/contract-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';


@NgModule({
  declarations: [
    ContractListComponent
  ],
  imports: [
    CommonModule,
    ContractRoutingModule,
    ContractShareModule,
    AntSimpleModule,
    TampilanModule,
    ApprovalModule
  ]
})
export class ContractModule { }
