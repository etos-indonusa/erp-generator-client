import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogSpRoutingModule } from './log-sp-routing.module';
import { LogSpListComponent } from './log-sp-list/log-sp-list.component';
import { LogSpShareModule } from './log-sp-share/log-sp-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    LogSpListComponent
  ],
  imports: [
    CommonModule,
    LogSpRoutingModule,
    LogSpShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class LogSpModule { }
