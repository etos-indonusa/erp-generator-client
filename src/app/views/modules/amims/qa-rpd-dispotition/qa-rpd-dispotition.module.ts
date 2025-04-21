import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QaRpdDispotitionRoutingModule } from './qa-rpd-dispotition-routing.module';
import { QaRpdDispotitionListComponent } from './qa-rpd-dispotition-list/qa-rpd-dispotition-list.component';
import { QaRpdDispotitionShareModule } from './qa-rpd-dispotition-share/qa-rpd-dispotition-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    QaRpdDispotitionListComponent
  ],
  imports: [
    CommonModule,
    QaRpdDispotitionRoutingModule,
    QaRpdDispotitionShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class QaRpdDispotitionModule { }
