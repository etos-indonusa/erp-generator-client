import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { StoreTransferItemShareAddComponent } from './store-transfer-item-share-add/store-transfer-item-share-add.component';
import { StoreTransferItemShareDetailComponent } from './store-transfer-item-share-detail/store-transfer-item-share-detail.component'; 
import { StoreTransferItemShareWidgetComponent } from './store-transfer-item-share-widget/store-transfer-item-share-widget.component';
import { StoreTransferItemShareListComponent } from './store-transfer-item-share-list/store-transfer-item-share-list.component';
import { StoreTransferItemShareHeaderComponent } from './store-transfer-item-share-header/store-transfer-item-share-header.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { CustomFieldValueShareModule } from 'src/app/views/lib/custom-field-value/custom-field-value-share.module';

const COM = [
    StoreTransferItemShareAddComponent,
    StoreTransferItemShareDetailComponent,
    StoreTransferItemShareListComponent,
    StoreTransferItemShareHeaderComponent,
    StoreTransferItemShareWidgetComponent
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
export class StoreTransferItemShareModule { }
