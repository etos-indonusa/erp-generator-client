import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurPoRoutingModule } from './pur-po-routing.module';
import { PurPoListComponent } from './pur-po-list/pur-po-list.component';
import { PurPoShareModule } from './pur-po-share/pur-po-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    PurPoListComponent
  ],
  imports: [
    CommonModule,
    PurPoRoutingModule,
    PurPoShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class PurPoModule { }
