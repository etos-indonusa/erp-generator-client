import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { PurVendorItemShareAddComponent } from './pur-vendor-item-share-add/pur-vendor-item-share-add.component';
import { PurVendorItemShareDetailComponent } from './pur-vendor-item-share-detail/pur-vendor-item-share-detail.component'; 
import { PurVendorItemShareWidgetComponent } from './pur-vendor-item-share-widget/pur-vendor-item-share-widget.component';
import { PurVendorItemShareListComponent } from './pur-vendor-item-share-list/pur-vendor-item-share-list.component';
import { PurVendorItemShareHeaderComponent } from './pur-vendor-item-share-header/pur-vendor-item-share-header.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { CustomFieldValueShareModule } from 'src/app/views/lib/custom-field-value/custom-field-value-share.module';

const COM = [
    PurVendorItemShareAddComponent,
    PurVendorItemShareDetailComponent,
    PurVendorItemShareListComponent,
    PurVendorItemShareHeaderComponent,
    PurVendorItemShareWidgetComponent
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
export class PurVendorItemShareModule { }
