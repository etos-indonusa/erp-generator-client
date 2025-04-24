import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { TechLogShareAddComponent } from './tech-log-share-add/tech-log-share-add.component';
import { TechLogShareDetailComponent } from './tech-log-share-detail/tech-log-share-detail.component'; 
import { TechLogShareWidgetComponent } from './tech-log-share-widget/tech-log-share-widget.component';
import { TechLogShareListComponent } from './tech-log-share-list/tech-log-share-list.component';
import { TechLogShareHeaderComponent } from './tech-log-share-header/tech-log-share-header.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { CustomFieldValueShareModule } from 'src/app/views/lib/custom-field-value/custom-field-value-share.module';

const COM = [
    TechLogShareAddComponent,
    TechLogShareDetailComponent,
    TechLogShareListComponent,
    TechLogShareHeaderComponent,
    TechLogShareWidgetComponent
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
export class TechLogShareModule { }
