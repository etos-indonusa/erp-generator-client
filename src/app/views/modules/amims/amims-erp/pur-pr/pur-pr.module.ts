import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurPrRoutingModule } from './pur-pr-routing.module';
import { PurPrListComponent } from './pur-pr-list/pur-pr-list.component';
import { PurPrShareModule } from './pur-pr-share/pur-pr-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    PurPrListComponent
  ],
  imports: [
    CommonModule,
    PurPrRoutingModule,
    PurPrShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class PurPrModule { }
