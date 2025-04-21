import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogProcessRoutingModule } from './log-process-routing.module';
import { LogProcessListComponent } from './log-process-list/log-process-list.component';
import { LogProcessShareModule } from './log-process-share/log-process-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    LogProcessListComponent
  ],
  imports: [
    CommonModule,
    LogProcessRoutingModule,
    LogProcessShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class LogProcessModule { }
