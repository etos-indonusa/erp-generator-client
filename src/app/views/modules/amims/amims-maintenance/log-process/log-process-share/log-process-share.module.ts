import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { LogProcessShareAddComponent } from './log-process-share-add/log-process-share-add.component';
import { LogProcessShareDetailComponent } from './log-process-share-detail/log-process-share-detail.component'; 
import { LogProcessShareWidgetComponent } from './log-process-share-widget/log-process-share-widget.component';
import { LogProcessShareListComponent } from './log-process-share-list/log-process-share-list.component';
import { LogProcessShareHeaderComponent } from './log-process-share-header/log-process-share-header.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { CustomFieldValueShareModule } from 'src/app/views/lib/custom-field-value/custom-field-value-share.module';

const COM = [
    LogProcessShareAddComponent,
    LogProcessShareDetailComponent,
    LogProcessShareListComponent,
    LogProcessShareHeaderComponent,
    LogProcessShareWidgetComponent
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
export class LogProcessShareModule { }
