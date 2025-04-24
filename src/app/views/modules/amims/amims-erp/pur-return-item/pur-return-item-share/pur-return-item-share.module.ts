import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { PurReturnItemShareAddComponent } from './pur-return-item-share-add/pur-return-item-share-add.component';
import { PurReturnItemShareDetailComponent } from './pur-return-item-share-detail/pur-return-item-share-detail.component'; 
import { PurReturnItemShareWidgetComponent } from './pur-return-item-share-widget/pur-return-item-share-widget.component';
import { PurReturnItemShareListComponent } from './pur-return-item-share-list/pur-return-item-share-list.component';
import { PurReturnItemShareHeaderComponent } from './pur-return-item-share-header/pur-return-item-share-header.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { CustomFieldValueShareModule } from 'src/app/views/lib/custom-field-value/custom-field-value-share.module';

const COM = [
    PurReturnItemShareAddComponent,
    PurReturnItemShareDetailComponent,
    PurReturnItemShareListComponent,
    PurReturnItemShareHeaderComponent,
    PurReturnItemShareWidgetComponent
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
export class PurReturnItemShareModule { }
