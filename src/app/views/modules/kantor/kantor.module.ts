import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KantorRoutingModule } from './kantor-routing.module';
import { KantorListComponent } from './kantor-list/kantor-list.component';
import { KantorShareModule } from './kantor-share/kantor-share.module';
import { AntSimpleModule } from '../../../shared/ant-simple.module';
import { TampilanModule } from '../../../shared/tampilan.module';


@NgModule({
  declarations: [
    KantorListComponent
  ],
  imports: [
    CommonModule,
    KantorRoutingModule,
    KantorShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class KantorModule { }
