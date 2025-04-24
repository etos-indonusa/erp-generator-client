import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { PartConditionShareAddComponent } from './part-condition-share-add/part-condition-share-add.component';
import { PartConditionShareDetailComponent } from './part-condition-share-detail/part-condition-share-detail.component'; 
import { PartConditionShareWidgetComponent } from './part-condition-share-widget/part-condition-share-widget.component';
import { PartConditionShareListComponent } from './part-condition-share-list/part-condition-share-list.component';
import { PartConditionShareHeaderComponent } from './part-condition-share-header/part-condition-share-header.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { CustomFieldValueShareModule } from 'src/app/views/lib/custom-field-value/custom-field-value-share.module';

const COM = [
    PartConditionShareAddComponent,
    PartConditionShareDetailComponent,
    PartConditionShareListComponent,
    PartConditionShareHeaderComponent,
    PartConditionShareWidgetComponent
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
export class PartConditionShareModule { }
