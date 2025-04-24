import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { QaTransferShareAddComponent } from './qa-transfer-share-add/qa-transfer-share-add.component';
import { QaTransferShareDetailComponent } from './qa-transfer-share-detail/qa-transfer-share-detail.component'; 
import { QaTransferShareWidgetComponent } from './qa-transfer-share-widget/qa-transfer-share-widget.component';
import { QaTransferShareListComponent } from './qa-transfer-share-list/qa-transfer-share-list.component';
import { QaTransferShareHeaderComponent } from './qa-transfer-share-header/qa-transfer-share-header.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { CustomFieldValueShareModule } from 'src/app/views/lib/custom-field-value/custom-field-value-share.module';

const COM = [
    QaTransferShareAddComponent,
    QaTransferShareDetailComponent,
    QaTransferShareListComponent,
    QaTransferShareHeaderComponent,
    QaTransferShareWidgetComponent
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
export class QaTransferShareModule { }
