import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { PurPoShareAddComponent } from './pur-po-share-add/pur-po-share-add.component';
import { PurPoShareDetailComponent } from './pur-po-share-detail/pur-po-share-detail.component'; 
import { PurPoShareWidgetComponent } from './pur-po-share-widget/pur-po-share-widget.component';
import { PurPoShareListComponent } from './pur-po-share-list/pur-po-share-list.component';
import { PurPoShareHeaderComponent } from './pur-po-share-header/pur-po-share-header.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { CustomFieldValueShareModule } from 'src/app/views/lib/custom-field-value/custom-field-value-share.module';

const COM = [
    PurPoShareAddComponent,
    PurPoShareDetailComponent,
    PurPoShareListComponent,
    PurPoShareHeaderComponent,
    PurPoShareWidgetComponent
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
export class PurPoShareModule { }
