import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctypeRoutingModule } from './doctype-routing.module';
import { DoctypeListComponent } from './doctype-list/doctype-list.component';
import { DoctypeShareModule } from './doctype-share/doctype-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    DoctypeListComponent
  ],
  imports: [
    CommonModule,
    DoctypeRoutingModule,
    DoctypeShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class DoctypeModule { }
