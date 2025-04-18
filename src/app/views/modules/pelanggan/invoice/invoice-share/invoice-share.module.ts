import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { InvoiceShareAddComponent } from './invoice-share-add/invoice-share-add.component';
import { InvoiceShareDetailComponent } from './invoice-share-detail/invoice-share-detail.component'; 
import { InvoiceShareWidgetComponent } from './invoice-share-widget/invoice-share-widget.component';
import { InvoiceShareListComponent } from './invoice-share-list/invoice-share-list.component';
import { InvoiceShareHeaderComponent } from './invoice-share-header/invoice-share-header.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { CustomFieldValueShareModule } from 'src/app/views/lib/custom-field-value/custom-field-value-share.module';

const COM = [
    InvoiceShareAddComponent,
    InvoiceShareDetailComponent,
    InvoiceShareListComponent,
    InvoiceShareHeaderComponent,
    InvoiceShareWidgetComponent
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
export class InvoiceShareModule { }
