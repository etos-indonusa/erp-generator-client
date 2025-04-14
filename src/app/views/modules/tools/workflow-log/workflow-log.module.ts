import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkflowLogRoutingModule } from './workflow-log-routing.module';
import { WorkflowLogListComponent } from './workflow-log-list/workflow-log-list.component';
import { WorkflowLogShareModule } from './workflow-log-share/workflow-log-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    WorkflowLogListComponent
  ],
  imports: [
    CommonModule,
    WorkflowLogRoutingModule,
    WorkflowLogShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class WorkflowLogModule { }
