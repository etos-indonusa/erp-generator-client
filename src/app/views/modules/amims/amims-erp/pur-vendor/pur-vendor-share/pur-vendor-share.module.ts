import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { PurVendorShareAddComponent } from './pur-vendor-share-add/pur-vendor-share-add.component';
import { PurVendorShareDetailComponent } from './pur-vendor-share-detail/pur-vendor-share-detail.component'; 
import { PurVendorShareWidgetComponent } from './pur-vendor-share-widget/pur-vendor-share-widget.component';
import { PurVendorShareListComponent } from './pur-vendor-share-list/pur-vendor-share-list.component';
import { PurVendorShareHeaderComponent } from './pur-vendor-share-header/pur-vendor-share-header.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { CustomFieldValueShareModule } from 'src/app/views/lib/custom-field-value/custom-field-value-share.module';

const COM = [
    PurVendorShareAddComponent,
    PurVendorShareDetailComponent,
    PurVendorShareListComponent,
    PurVendorShareHeaderComponent,
    PurVendorShareWidgetComponent
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
export class PurVendorShareModule { }
