import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurPrclRoutingModule } from './pur-prcl-routing.module';
import { PurPrclListComponent } from './pur-prcl-list/pur-prcl-list.component';
import { PurPrclShareModule } from './pur-prcl-share/pur-prcl-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    PurPrclListComponent
  ],
  imports: [
    CommonModule,
    PurPrclRoutingModule,
    PurPrclShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class PurPrclModule { }
