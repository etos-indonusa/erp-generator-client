import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { TechLogItemShareAddComponent } from './tech-log-item-share-add/tech-log-item-share-add.component';
import { TechLogItemShareDetailComponent } from './tech-log-item-share-detail/tech-log-item-share-detail.component'; 
import { TechLogItemShareWidgetComponent } from './tech-log-item-share-widget/tech-log-item-share-widget.component';
import { TechLogItemShareListComponent } from './tech-log-item-share-list/tech-log-item-share-list.component';
import { TechLogItemShareHeaderComponent } from './tech-log-item-share-header/tech-log-item-share-header.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { CustomFieldValueShareModule } from 'src/app/views/lib/custom-field-value/custom-field-value-share.module';

const COM = [
    TechLogItemShareAddComponent,
    TechLogItemShareDetailComponent,
    TechLogItemShareListComponent,
    TechLogItemShareHeaderComponent,
    TechLogItemShareWidgetComponent
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
export class TechLogItemShareModule { }
