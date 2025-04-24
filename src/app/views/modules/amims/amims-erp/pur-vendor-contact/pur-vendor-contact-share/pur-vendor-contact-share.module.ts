import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { PurVendorContactShareAddComponent } from './pur-vendor-contact-share-add/pur-vendor-contact-share-add.component';
import { PurVendorContactShareDetailComponent } from './pur-vendor-contact-share-detail/pur-vendor-contact-share-detail.component'; 
import { PurVendorContactShareWidgetComponent } from './pur-vendor-contact-share-widget/pur-vendor-contact-share-widget.component';
import { PurVendorContactShareListComponent } from './pur-vendor-contact-share-list/pur-vendor-contact-share-list.component';
import { PurVendorContactShareHeaderComponent } from './pur-vendor-contact-share-header/pur-vendor-contact-share-header.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { CustomFieldValueShareModule } from 'src/app/views/lib/custom-field-value/custom-field-value-share.module';

const COM = [
    PurVendorContactShareAddComponent,
    PurVendorContactShareDetailComponent,
    PurVendorContactShareListComponent,
    PurVendorContactShareHeaderComponent,
    PurVendorContactShareWidgetComponent
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
export class PurVendorContactShareModule { }
