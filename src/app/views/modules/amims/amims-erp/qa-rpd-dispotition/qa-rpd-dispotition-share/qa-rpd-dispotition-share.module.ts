import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { QaRpdDispotitionShareAddComponent } from './qa-rpd-dispotition-share-add/qa-rpd-dispotition-share-add.component';
import { QaRpdDispotitionShareDetailComponent } from './qa-rpd-dispotition-share-detail/qa-rpd-dispotition-share-detail.component'; 
import { QaRpdDispotitionShareWidgetComponent } from './qa-rpd-dispotition-share-widget/qa-rpd-dispotition-share-widget.component';
import { QaRpdDispotitionShareListComponent } from './qa-rpd-dispotition-share-list/qa-rpd-dispotition-share-list.component';
import { QaRpdDispotitionShareHeaderComponent } from './qa-rpd-dispotition-share-header/qa-rpd-dispotition-share-header.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { CustomFieldValueShareModule } from 'src/app/views/lib/custom-field-value/custom-field-value-share.module';

const COM = [
    QaRpdDispotitionShareAddComponent,
    QaRpdDispotitionShareDetailComponent,
    QaRpdDispotitionShareListComponent,
    QaRpdDispotitionShareHeaderComponent,
    QaRpdDispotitionShareWidgetComponent
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
export class QaRpdDispotitionShareModule { }
