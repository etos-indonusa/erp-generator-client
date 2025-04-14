import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkflowLogShareAddComponent } from './workflow-log-share-add/workflow-log-share-add.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { WorkflowLogShareDetailComponent } from './workflow-log-share-detail/workflow-log-share-detail.component';
 
 
@NgModule({
    declarations: [
        WorkflowLogShareAddComponent, 
        WorkflowLogShareDetailComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AntSimpleModule,
        TampilanModule
    ]
}) 
export class WorkflowLogShareModule { }
