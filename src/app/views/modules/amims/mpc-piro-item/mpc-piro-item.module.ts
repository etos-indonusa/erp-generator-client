import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MpcPiroItemRoutingModule } from './mpc-piro-item-routing.module';
import { MpcPiroItemListComponent } from './mpc-piro-item-list/mpc-piro-item-list.component';
import { MpcPiroItemShareModule } from './mpc-piro-item-share/mpc-piro-item-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    MpcPiroItemListComponent
  ],
  imports: [
    CommonModule,
    MpcPiroItemRoutingModule,
    MpcPiroItemShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class MpcPiroItemModule { }
