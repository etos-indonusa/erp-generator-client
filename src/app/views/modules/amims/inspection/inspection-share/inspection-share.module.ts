import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { InspectionShareAddComponent } from './inspection-share-add/inspection-share-add.component';
import { InspectionShareDetailComponent } from './inspection-share-detail/inspection-share-detail.component'; 
import { InspectionShareWidgetComponent } from './inspection-share-widget/inspection-share-widget.component';
import { InspectionShareListComponent } from './inspection-share-list/inspection-share-list.component';
import { InspectionShareHeaderComponent } from './inspection-share-header/inspection-share-header.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { CustomFieldValueShareModule } from 'src/app/views/lib/custom-field-value/custom-field-value-share.module';

const COM = [
    InspectionShareAddComponent,
    InspectionShareDetailComponent,
    InspectionShareListComponent,
    InspectionShareHeaderComponent,
    InspectionShareWidgetComponent
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
export class InspectionShareModule { }
