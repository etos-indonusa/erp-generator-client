import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurReturnRoutingModule } from './pur-return-routing.module';
import { PurReturnListComponent } from './pur-return-list/pur-return-list.component';
import { PurReturnShareModule } from './pur-return-share/pur-return-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    PurReturnListComponent
  ],
  imports: [
    CommonModule,
    PurReturnRoutingModule,
    PurReturnShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class PurReturnModule { }
