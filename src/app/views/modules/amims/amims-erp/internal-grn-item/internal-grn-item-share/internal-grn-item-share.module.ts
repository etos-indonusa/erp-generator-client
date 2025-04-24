import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { InternalGrnItemShareAddComponent } from './internal-grn-item-share-add/internal-grn-item-share-add.component';
import { InternalGrnItemShareDetailComponent } from './internal-grn-item-share-detail/internal-grn-item-share-detail.component'; 
import { InternalGrnItemShareWidgetComponent } from './internal-grn-item-share-widget/internal-grn-item-share-widget.component';
import { InternalGrnItemShareListComponent } from './internal-grn-item-share-list/internal-grn-item-share-list.component';
import { InternalGrnItemShareHeaderComponent } from './internal-grn-item-share-header/internal-grn-item-share-header.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { CustomFieldValueShareModule } from 'src/app/views/lib/custom-field-value/custom-field-value-share.module';

const COM = [
    InternalGrnItemShareAddComponent,
    InternalGrnItemShareDetailComponent,
    InternalGrnItemShareListComponent,
    InternalGrnItemShareHeaderComponent,
    InternalGrnItemShareWidgetComponent
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
export class InternalGrnItemShareModule { }
