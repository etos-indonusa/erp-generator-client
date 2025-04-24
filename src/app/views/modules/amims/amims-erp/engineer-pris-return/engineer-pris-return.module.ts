import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EngineerPrisReturnRoutingModule } from './engineer-pris-return-routing.module';
import { EngineerPrisReturnListComponent } from './engineer-pris-return-list/engineer-pris-return-list.component';
import { EngineerPrisReturnShareModule } from './engineer-pris-return-share/engineer-pris-return-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    EngineerPrisReturnListComponent
  ],
  imports: [
    CommonModule,
    EngineerPrisReturnRoutingModule,
    EngineerPrisReturnShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class EngineerPrisReturnModule { }
