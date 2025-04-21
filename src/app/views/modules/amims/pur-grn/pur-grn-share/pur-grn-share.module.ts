import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { PurGrnShareAddComponent } from './pur-grn-share-add/pur-grn-share-add.component';
import { PurGrnShareDetailComponent } from './pur-grn-share-detail/pur-grn-share-detail.component'; 
import { PurGrnShareWidgetComponent } from './pur-grn-share-widget/pur-grn-share-widget.component';
import { PurGrnShareListComponent } from './pur-grn-share-list/pur-grn-share-list.component';
import { PurGrnShareHeaderComponent } from './pur-grn-share-header/pur-grn-share-header.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { CustomFieldValueShareModule } from 'src/app/views/lib/custom-field-value/custom-field-value-share.module';

const COM = [
    PurGrnShareAddComponent,
    PurGrnShareDetailComponent,
    PurGrnShareListComponent,
    PurGrnShareHeaderComponent,
    PurGrnShareWidgetComponent
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
export class PurGrnShareModule { }
