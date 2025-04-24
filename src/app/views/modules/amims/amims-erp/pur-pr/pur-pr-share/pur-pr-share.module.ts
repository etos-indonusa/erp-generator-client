import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { PurPrShareAddComponent } from './pur-pr-share-add/pur-pr-share-add.component';
import { PurPrShareDetailComponent } from './pur-pr-share-detail/pur-pr-share-detail.component'; 
import { PurPrShareWidgetComponent } from './pur-pr-share-widget/pur-pr-share-widget.component';
import { PurPrShareListComponent } from './pur-pr-share-list/pur-pr-share-list.component';
import { PurPrShareHeaderComponent } from './pur-pr-share-header/pur-pr-share-header.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { CustomFieldValueShareModule } from 'src/app/views/lib/custom-field-value/custom-field-value-share.module';

const COM = [
    PurPrShareAddComponent,
    PurPrShareDetailComponent,
    PurPrShareListComponent,
    PurPrShareHeaderComponent,
    PurPrShareWidgetComponent
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
export class PurPrShareModule { }
