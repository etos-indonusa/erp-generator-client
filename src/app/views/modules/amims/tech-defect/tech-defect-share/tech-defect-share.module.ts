import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { TechDefectShareAddComponent } from './tech-defect-share-add/tech-defect-share-add.component';
import { TechDefectShareDetailComponent } from './tech-defect-share-detail/tech-defect-share-detail.component'; 
import { TechDefectShareWidgetComponent } from './tech-defect-share-widget/tech-defect-share-widget.component';
import { TechDefectShareListComponent } from './tech-defect-share-list/tech-defect-share-list.component';
import { TechDefectShareHeaderComponent } from './tech-defect-share-header/tech-defect-share-header.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { CustomFieldValueShareModule } from 'src/app/views/lib/custom-field-value/custom-field-value-share.module';

const COM = [
    TechDefectShareAddComponent,
    TechDefectShareDetailComponent,
    TechDefectShareListComponent,
    TechDefectShareHeaderComponent,
    TechDefectShareWidgetComponent
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
export class TechDefectShareModule { }
