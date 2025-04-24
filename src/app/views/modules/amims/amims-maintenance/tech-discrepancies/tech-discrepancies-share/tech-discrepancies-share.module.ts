import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { TechDiscrepanciesShareAddComponent } from './tech-discrepancies-share-add/tech-discrepancies-share-add.component';
import { TechDiscrepanciesShareDetailComponent } from './tech-discrepancies-share-detail/tech-discrepancies-share-detail.component'; 
import { TechDiscrepanciesShareWidgetComponent } from './tech-discrepancies-share-widget/tech-discrepancies-share-widget.component';
import { TechDiscrepanciesShareListComponent } from './tech-discrepancies-share-list/tech-discrepancies-share-list.component';
import { TechDiscrepanciesShareHeaderComponent } from './tech-discrepancies-share-header/tech-discrepancies-share-header.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { CustomFieldValueShareModule } from 'src/app/views/lib/custom-field-value/custom-field-value-share.module';

const COM = [
    TechDiscrepanciesShareAddComponent,
    TechDiscrepanciesShareDetailComponent,
    TechDiscrepanciesShareListComponent,
    TechDiscrepanciesShareHeaderComponent,
    TechDiscrepanciesShareWidgetComponent
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
export class TechDiscrepanciesShareModule { }
