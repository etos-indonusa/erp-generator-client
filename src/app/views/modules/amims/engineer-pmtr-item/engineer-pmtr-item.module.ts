import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EngineerPmtrItemRoutingModule } from './engineer-pmtr-item-routing.module';
import { EngineerPmtrItemListComponent } from './engineer-pmtr-item-list/engineer-pmtr-item-list.component';
import { EngineerPmtrItemShareModule } from './engineer-pmtr-item-share/engineer-pmtr-item-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    EngineerPmtrItemListComponent
  ],
  imports: [
    CommonModule,
    EngineerPmtrItemRoutingModule,
    EngineerPmtrItemShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class EngineerPmtrItemModule { }
