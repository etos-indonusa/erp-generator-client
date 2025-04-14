import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { WorkflowStepShareAddComponent } from './workflow-step-share-add/workflow-step-share-add.component';
import { WorkflowStepShareDetailComponent } from './workflow-step-share-detail/workflow-step-share-detail.component'; 
import { WorkflowStepShareWidgetComponent } from './workflow-step-share-widget/workflow-step-share-widget.component';
import { WorkflowStepShareListComponent } from './workflow-step-share-list/workflow-step-share-list.component';
import { WorkflowStepShareHeaderComponent } from './workflow-step-share-header/workflow-step-share-header.component';

 
const COM = [
    WorkflowStepShareAddComponent,
    WorkflowStepShareDetailComponent,
    WorkflowStepShareListComponent,
    WorkflowStepShareHeaderComponent,
    WorkflowStepShareWidgetComponent
]

@NgModule({
    declarations: [
        ...COM,
    ],
    exports: [
        ...COM
    ], 
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AntSimpleModule,
        TampilanModule,
        RouterModule
    ]
}) 
export class WorkflowStepShareModule { }
