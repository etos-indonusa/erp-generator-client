import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { PurPrclShareAddComponent } from './pur-prcl-share-add/pur-prcl-share-add.component';
import { PurPrclShareDetailComponent } from './pur-prcl-share-detail/pur-prcl-share-detail.component'; 
import { PurPrclShareWidgetComponent } from './pur-prcl-share-widget/pur-prcl-share-widget.component';
import { PurPrclShareListComponent } from './pur-prcl-share-list/pur-prcl-share-list.component';
import { PurPrclShareHeaderComponent } from './pur-prcl-share-header/pur-prcl-share-header.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { CustomFieldValueShareModule } from 'src/app/views/lib/custom-field-value/custom-field-value-share.module';

const COM = [
    PurPrclShareAddComponent,
    PurPrclShareDetailComponent,
    PurPrclShareListComponent,
    PurPrclShareHeaderComponent,
    PurPrclShareWidgetComponent
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
export class PurPrclShareModule { }
