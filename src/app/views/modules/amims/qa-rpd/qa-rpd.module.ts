import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QaRpdRoutingModule } from './qa-rpd-routing.module';
import { QaRpdListComponent } from './qa-rpd-list/qa-rpd-list.component';
import { QaRpdShareModule } from './qa-rpd-share/qa-rpd-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    QaRpdListComponent
  ],
  imports: [
    CommonModule,
    QaRpdRoutingModule,
    QaRpdShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class QaRpdModule { }
