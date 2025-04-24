import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogUserRoutingModule } from './log-user-routing.module';
import { LogUserListComponent } from './log-user-list/log-user-list.component';
import { LogUserShareModule } from './log-user-share/log-user-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    LogUserListComponent
  ],
  imports: [
    CommonModule,
    LogUserRoutingModule,
    LogUserShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class LogUserModule { }
