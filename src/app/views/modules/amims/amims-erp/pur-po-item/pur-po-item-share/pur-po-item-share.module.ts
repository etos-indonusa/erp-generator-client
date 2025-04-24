import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { PurPoItemShareAddComponent } from './pur-po-item-share-add/pur-po-item-share-add.component';
import { PurPoItemShareDetailComponent } from './pur-po-item-share-detail/pur-po-item-share-detail.component'; 
import { PurPoItemShareWidgetComponent } from './pur-po-item-share-widget/pur-po-item-share-widget.component';
import { PurPoItemShareListComponent } from './pur-po-item-share-list/pur-po-item-share-list.component';
import { PurPoItemShareHeaderComponent } from './pur-po-item-share-header/pur-po-item-share-header.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { CustomFieldValueShareModule } from 'src/app/views/lib/custom-field-value/custom-field-value-share.module';

const COM = [
    PurPoItemShareAddComponent,
    PurPoItemShareDetailComponent,
    PurPoItemShareListComponent,
    PurPoItemShareHeaderComponent,
    PurPoItemShareWidgetComponent
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
export class PurPoItemShareModule { }
