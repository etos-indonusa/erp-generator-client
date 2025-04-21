import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EngineerPrisRoutingModule } from './engineer-pris-routing.module';
import { EngineerPrisListComponent } from './engineer-pris-list/engineer-pris-list.component';
import { EngineerPrisShareModule } from './engineer-pris-share/engineer-pris-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    EngineerPrisListComponent
  ],
  imports: [
    CommonModule,
    EngineerPrisRoutingModule,
    EngineerPrisShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class EngineerPrisModule { }
