import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { PurGrnItemShareAddComponent } from './pur-grn-item-share-add/pur-grn-item-share-add.component';
import { PurGrnItemShareDetailComponent } from './pur-grn-item-share-detail/pur-grn-item-share-detail.component'; 
import { PurGrnItemShareWidgetComponent } from './pur-grn-item-share-widget/pur-grn-item-share-widget.component';
import { PurGrnItemShareListComponent } from './pur-grn-item-share-list/pur-grn-item-share-list.component';
import { PurGrnItemShareHeaderComponent } from './pur-grn-item-share-header/pur-grn-item-share-header.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { CustomFieldValueShareModule } from 'src/app/views/lib/custom-field-value/custom-field-value-share.module';

const COM = [
    PurGrnItemShareAddComponent,
    PurGrnItemShareDetailComponent,
    PurGrnItemShareListComponent,
    PurGrnItemShareHeaderComponent,
    PurGrnItemShareWidgetComponent
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
export class PurGrnItemShareModule { }
