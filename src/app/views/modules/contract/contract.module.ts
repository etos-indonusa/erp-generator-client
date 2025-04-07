import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractRoutingModule } from './contract-routing.module';
import { ContractListComponent } from './contract-list/contract-list.component';
import { ContractShareModule } from './contract-share/contract-share.module';
import { AntSimpleModule } from '../../../shared/ant-simple.module';
import { TampilanModule } from '../../../shared/tampilan.module';


@NgModule({
  declarations: [
    ContractListComponent
  ],
  imports: [
    CommonModule,
    ContractRoutingModule,
    ContractShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class ContractModule { }
