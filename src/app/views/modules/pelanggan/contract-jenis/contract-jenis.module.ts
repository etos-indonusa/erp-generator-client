import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractJenisRoutingModule } from './contract-jenis-routing.module';
import { ContractJenisListComponent } from './contract-jenis-list/contract-jenis-list.component';
import { ContractJenisShareModule } from './contract-jenis-share/contract-jenis-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    ContractJenisListComponent
  ],
  imports: [
    CommonModule,
    ContractJenisRoutingModule,
    ContractJenisShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class ContractJenisModule { }
