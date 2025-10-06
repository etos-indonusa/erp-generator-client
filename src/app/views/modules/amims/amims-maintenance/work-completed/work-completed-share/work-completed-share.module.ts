import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { WorkCompletedShareAddComponent } from './work-completed-share-add/work-completed-share-add.component';
import { WorkCompletedShareDetailComponent } from './work-completed-share-detail/work-completed-share-detail.component'; 
import { WorkCompletedShareWidgetComponent } from './work-completed-share-widget/work-completed-share-widget.component';
import { WorkCompletedShareListComponent } from './work-completed-share-list/work-completed-share-list.component';
import { WorkCompletedShareHeaderComponent } from './work-completed-share-header/work-completed-share-header.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { CustomFieldValueShareModule } from 'src/app/views/lib/custom-field-value/custom-field-value-share.module';

const COM = [
    WorkCompletedShareAddComponent,
    WorkCompletedShareDetailComponent,
    WorkCompletedShareListComponent,
    WorkCompletedShareHeaderComponent,
    WorkCompletedShareWidgetComponent
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
        // ApprovalModule,
        CustomFieldValueShareModule
    ]
}) 
export class WorkCompletedShareModule { }
