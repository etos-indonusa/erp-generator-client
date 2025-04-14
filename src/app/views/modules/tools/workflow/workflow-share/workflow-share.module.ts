import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { WorkflowShareAddComponent } from './workflow-share-add/workflow-share-add.component';
import { WorkflowShareDetailComponent } from './workflow-share-detail/workflow-share-detail.component'; 
import { WorkflowShareWidgetComponent } from './workflow-share-widget/workflow-share-widget.component';
import { WorkflowShareListComponent } from './workflow-share-list/workflow-share-list.component';
import { WorkflowShareHeaderComponent } from './workflow-share-header/workflow-share-header.component';
import { WorkflowStepShareModule } from '../../workflow-step/workflow-step-share/workflow-step-share.module';

 
const COM = [
    WorkflowShareAddComponent,
    WorkflowShareDetailComponent,
    WorkflowShareListComponent,
    WorkflowShareHeaderComponent,
    WorkflowShareWidgetComponent
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
        RouterModule,
        WorkflowStepShareModule
    ]
}) 
export class WorkflowShareModule { }
