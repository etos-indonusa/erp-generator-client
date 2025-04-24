import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { QaRpdShareAddComponent } from './qa-rpd-share-add/qa-rpd-share-add.component';
import { QaRpdShareDetailComponent } from './qa-rpd-share-detail/qa-rpd-share-detail.component'; 
import { QaRpdShareWidgetComponent } from './qa-rpd-share-widget/qa-rpd-share-widget.component';
import { QaRpdShareListComponent } from './qa-rpd-share-list/qa-rpd-share-list.component';
import { QaRpdShareHeaderComponent } from './qa-rpd-share-header/qa-rpd-share-header.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { CustomFieldValueShareModule } from 'src/app/views/lib/custom-field-value/custom-field-value-share.module';

const COM = [
    QaRpdShareAddComponent,
    QaRpdShareDetailComponent,
    QaRpdShareListComponent,
    QaRpdShareHeaderComponent,
    QaRpdShareWidgetComponent
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
export class QaRpdShareModule { }
