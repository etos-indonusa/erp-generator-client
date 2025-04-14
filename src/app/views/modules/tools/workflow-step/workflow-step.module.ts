import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkflowStepRoutingModule } from './workflow-step-routing.module';
import { WorkflowStepListComponent } from './workflow-step-list/workflow-step-list.component';
import { WorkflowStepShareModule } from './workflow-step-share/workflow-step-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    WorkflowStepListComponent
  ],
  imports: [
    CommonModule,
    WorkflowStepRoutingModule,
    WorkflowStepShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class WorkflowStepModule { }
