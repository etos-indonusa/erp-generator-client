import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { LogSpShareAddComponent } from './log-sp-share-add/log-sp-share-add.component';
import { LogSpShareDetailComponent } from './log-sp-share-detail/log-sp-share-detail.component'; 
import { LogSpShareWidgetComponent } from './log-sp-share-widget/log-sp-share-widget.component';
import { LogSpShareListComponent } from './log-sp-share-list/log-sp-share-list.component';
import { LogSpShareHeaderComponent } from './log-sp-share-header/log-sp-share-header.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { CustomFieldValueShareModule } from 'src/app/views/lib/custom-field-value/custom-field-value-share.module';

const COM = [
    LogSpShareAddComponent,
    LogSpShareDetailComponent,
    LogSpShareListComponent,
    LogSpShareHeaderComponent,
    LogSpShareWidgetComponent
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
export class LogSpShareModule { }
