import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EngineerPrisReturnItemRoutingModule } from './engineer-pris-return-item-routing.module';
import { EngineerPrisReturnItemListComponent } from './engineer-pris-return-item-list/engineer-pris-return-item-list.component';
import { EngineerPrisReturnItemShareModule } from './engineer-pris-return-item-share/engineer-pris-return-item-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    EngineerPrisReturnItemListComponent
  ],
  imports: [
    CommonModule,
    EngineerPrisReturnItemRoutingModule,
    EngineerPrisReturnItemShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class EngineerPrisReturnItemModule { }
