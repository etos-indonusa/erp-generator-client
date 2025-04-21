import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { QaTransferItemShareAddComponent } from './qa-transfer-item-share-add/qa-transfer-item-share-add.component';
import { QaTransferItemShareDetailComponent } from './qa-transfer-item-share-detail/qa-transfer-item-share-detail.component'; 
import { QaTransferItemShareWidgetComponent } from './qa-transfer-item-share-widget/qa-transfer-item-share-widget.component';
import { QaTransferItemShareListComponent } from './qa-transfer-item-share-list/qa-transfer-item-share-list.component';
import { QaTransferItemShareHeaderComponent } from './qa-transfer-item-share-header/qa-transfer-item-share-header.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { CustomFieldValueShareModule } from 'src/app/views/lib/custom-field-value/custom-field-value-share.module';

const COM = [
    QaTransferItemShareAddComponent,
    QaTransferItemShareDetailComponent,
    QaTransferItemShareListComponent,
    QaTransferItemShareHeaderComponent,
    QaTransferItemShareWidgetComponent
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
export class QaTransferItemShareModule { }
