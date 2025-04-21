import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurGrnRoutingModule } from './pur-grn-routing.module';
import { PurGrnListComponent } from './pur-grn-list/pur-grn-list.component';
import { PurGrnShareModule } from './pur-grn-share/pur-grn-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    PurGrnListComponent
  ],
  imports: [
    CommonModule,
    PurGrnRoutingModule,
    PurGrnShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class PurGrnModule { }
