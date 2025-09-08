import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { TechLogEngineShareAddComponent } from './tech-log-engine-share-add/tech-log-engine-share-add.component';
import { TechLogEngineShareDetailComponent } from './tech-log-engine-share-detail/tech-log-engine-share-detail.component'; 
import { TechLogEngineShareWidgetComponent } from './tech-log-engine-share-widget/tech-log-engine-share-widget.component';
import { TechLogEngineShareListComponent } from './tech-log-engine-share-list/tech-log-engine-share-list.component';
import { TechLogEngineShareHeaderComponent } from './tech-log-engine-share-header/tech-log-engine-share-header.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { CustomFieldValueShareModule } from 'src/app/views/lib/custom-field-value/custom-field-value-share.module';

const COM = [
    TechLogEngineShareAddComponent,
    TechLogEngineShareDetailComponent,
    TechLogEngineShareListComponent,
    TechLogEngineShareHeaderComponent,
    TechLogEngineShareWidgetComponent
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
export class TechLogEngineShareModule { }
