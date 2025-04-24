import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { TechLogEngineCheckShareAddComponent } from './tech-log-engine-check-share-add/tech-log-engine-check-share-add.component';
import { TechLogEngineCheckShareDetailComponent } from './tech-log-engine-check-share-detail/tech-log-engine-check-share-detail.component'; 
import { TechLogEngineCheckShareWidgetComponent } from './tech-log-engine-check-share-widget/tech-log-engine-check-share-widget.component';
import { TechLogEngineCheckShareListComponent } from './tech-log-engine-check-share-list/tech-log-engine-check-share-list.component';
import { TechLogEngineCheckShareHeaderComponent } from './tech-log-engine-check-share-header/tech-log-engine-check-share-header.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { CustomFieldValueShareModule } from 'src/app/views/lib/custom-field-value/custom-field-value-share.module';

const COM = [
    TechLogEngineCheckShareAddComponent,
    TechLogEngineCheckShareDetailComponent,
    TechLogEngineCheckShareListComponent,
    TechLogEngineCheckShareHeaderComponent,
    TechLogEngineCheckShareWidgetComponent
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
export class TechLogEngineCheckShareModule { }
