import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { StoreTransferShareAddComponent } from './store-transfer-share-add/store-transfer-share-add.component';
import { StoreTransferShareDetailComponent } from './store-transfer-share-detail/store-transfer-share-detail.component'; 
import { StoreTransferShareWidgetComponent } from './store-transfer-share-widget/store-transfer-share-widget.component';
import { StoreTransferShareListComponent } from './store-transfer-share-list/store-transfer-share-list.component';
import { StoreTransferShareHeaderComponent } from './store-transfer-share-header/store-transfer-share-header.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { CustomFieldValueShareModule } from 'src/app/views/lib/custom-field-value/custom-field-value-share.module';

const COM = [
    StoreTransferShareAddComponent,
    StoreTransferShareDetailComponent,
    StoreTransferShareListComponent,
    StoreTransferShareHeaderComponent,
    StoreTransferShareWidgetComponent
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
export class StoreTransferShareModule { }
