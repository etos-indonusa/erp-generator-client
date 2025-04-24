import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BinRoutingModule } from './bin-routing.module';
import { BinListComponent } from './bin-list/bin-list.component';
import { BinShareModule } from './bin-share/bin-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    BinListComponent
  ],
  imports: [
    CommonModule,
    BinRoutingModule,
    BinShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class BinModule { }
