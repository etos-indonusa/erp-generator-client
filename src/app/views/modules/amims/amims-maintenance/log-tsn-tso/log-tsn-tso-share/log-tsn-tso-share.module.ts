import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { LogTsnTsoShareAddComponent } from './log-tsn-tso-share-add/log-tsn-tso-share-add.component';
import { LogTsnTsoShareDetailComponent } from './log-tsn-tso-share-detail/log-tsn-tso-share-detail.component'; 
import { LogTsnTsoShareWidgetComponent } from './log-tsn-tso-share-widget/log-tsn-tso-share-widget.component';
import { LogTsnTsoShareListComponent } from './log-tsn-tso-share-list/log-tsn-tso-share-list.component';
import { LogTsnTsoShareHeaderComponent } from './log-tsn-tso-share-header/log-tsn-tso-share-header.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { CustomFieldValueShareModule } from 'src/app/views/lib/custom-field-value/custom-field-value-share.module';

const COM = [
    LogTsnTsoShareAddComponent,
    LogTsnTsoShareDetailComponent,
    LogTsnTsoShareListComponent,
    LogTsnTsoShareHeaderComponent,
    LogTsnTsoShareWidgetComponent
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
export class LogTsnTsoShareModule { }
