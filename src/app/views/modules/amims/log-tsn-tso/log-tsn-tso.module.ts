import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogTsnTsoRoutingModule } from './log-tsn-tso-routing.module';
import { LogTsnTsoListComponent } from './log-tsn-tso-list/log-tsn-tso-list.component';
import { LogTsnTsoShareModule } from './log-tsn-tso-share/log-tsn-tso-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    LogTsnTsoListComponent
  ],
  imports: [
    CommonModule,
    LogTsnTsoRoutingModule,
    LogTsnTsoShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class LogTsnTsoModule { }
