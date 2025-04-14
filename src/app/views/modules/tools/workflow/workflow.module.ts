import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkflowRoutingModule } from './workflow-routing.module';
import { WorkflowListComponent } from './workflow-list/workflow-list.component';
import { WorkflowShareModule } from './workflow-share/workflow-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    WorkflowListComponent
  ],
  imports: [
    CommonModule,
    WorkflowRoutingModule,
    WorkflowShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class WorkflowModule { }
