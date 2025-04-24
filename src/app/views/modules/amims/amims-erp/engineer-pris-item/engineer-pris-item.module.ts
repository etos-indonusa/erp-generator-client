import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EngineerPrisItemRoutingModule } from './engineer-pris-item-routing.module';
import { EngineerPrisItemListComponent } from './engineer-pris-item-list/engineer-pris-item-list.component';
import { EngineerPrisItemShareModule } from './engineer-pris-item-share/engineer-pris-item-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    EngineerPrisItemListComponent
  ],
  imports: [
    CommonModule,
    EngineerPrisItemRoutingModule,
    EngineerPrisItemShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class EngineerPrisItemModule { }
