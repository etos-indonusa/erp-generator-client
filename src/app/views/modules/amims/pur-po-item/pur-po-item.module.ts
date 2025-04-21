import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurPoItemRoutingModule } from './pur-po-item-routing.module';
import { PurPoItemListComponent } from './pur-po-item-list/pur-po-item-list.component';
import { PurPoItemShareModule } from './pur-po-item-share/pur-po-item-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    PurPoItemListComponent
  ],
  imports: [
    CommonModule,
    PurPoItemRoutingModule,
    PurPoItemShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class PurPoItemModule { }
