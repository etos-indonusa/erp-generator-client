import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { InternalGrnShareAddComponent } from './internal-grn-share-add/internal-grn-share-add.component';
import { InternalGrnShareDetailComponent } from './internal-grn-share-detail/internal-grn-share-detail.component'; 
import { InternalGrnShareWidgetComponent } from './internal-grn-share-widget/internal-grn-share-widget.component';
import { InternalGrnShareListComponent } from './internal-grn-share-list/internal-grn-share-list.component';
import { InternalGrnShareHeaderComponent } from './internal-grn-share-header/internal-grn-share-header.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { CustomFieldValueShareModule } from 'src/app/views/lib/custom-field-value/custom-field-value-share.module';

const COM = [
    InternalGrnShareAddComponent,
    InternalGrnShareDetailComponent,
    InternalGrnShareListComponent,
    InternalGrnShareHeaderComponent,
    InternalGrnShareWidgetComponent
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
export class InternalGrnShareModule { }
