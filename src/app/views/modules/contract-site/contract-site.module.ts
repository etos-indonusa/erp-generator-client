import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractSiteRoutingModule } from './contract-site-routing.module';
import { ContractSiteListComponent } from './contract-site-list/contract-site-list.component';
import { ContractSiteShareModule } from './contract-site-share/contract-site-share.module';
import { AntSimpleModule } from '../../../shared/ant-simple.module';
import { TampilanModule } from '../../../shared/tampilan.module';


@NgModule({
  declarations: [
    ContractSiteListComponent
  ],
  imports: [
    CommonModule,
    ContractSiteRoutingModule,
    ContractSiteShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class ContractSiteModule { }
