import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { PurPrItemShareAddComponent } from './pur-pr-item-share-add/pur-pr-item-share-add.component';
import { PurPrItemShareDetailComponent } from './pur-pr-item-share-detail/pur-pr-item-share-detail.component'; 
import { PurPrItemShareWidgetComponent } from './pur-pr-item-share-widget/pur-pr-item-share-widget.component';
import { PurPrItemShareListComponent } from './pur-pr-item-share-list/pur-pr-item-share-list.component';
import { PurPrItemShareHeaderComponent } from './pur-pr-item-share-header/pur-pr-item-share-header.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { CustomFieldValueShareModule } from 'src/app/views/lib/custom-field-value/custom-field-value-share.module';

const COM = [
    PurPrItemShareAddComponent,
    PurPrItemShareDetailComponent,
    PurPrItemShareListComponent,
    PurPrItemShareHeaderComponent,
    PurPrItemShareWidgetComponent
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
export class PurPrItemShareModule { }
