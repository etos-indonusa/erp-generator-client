import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurPrItemRoutingModule } from './pur-pr-item-routing.module';
import { PurPrItemListComponent } from './pur-pr-item-list/pur-pr-item-list.component';
import { PurPrItemShareModule } from './pur-pr-item-share/pur-pr-item-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    PurPrItemListComponent
  ],
  imports: [
    CommonModule,
    PurPrItemRoutingModule,
    PurPrItemShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class PurPrItemModule { }
