import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { TechLogJoShareAddComponent } from './tech-log-jo-share-add/tech-log-jo-share-add.component';
import { TechLogJoShareDetailComponent } from './tech-log-jo-share-detail/tech-log-jo-share-detail.component'; 
import { TechLogJoShareWidgetComponent } from './tech-log-jo-share-widget/tech-log-jo-share-widget.component';
import { TechLogJoShareListComponent } from './tech-log-jo-share-list/tech-log-jo-share-list.component';
import { TechLogJoShareHeaderComponent } from './tech-log-jo-share-header/tech-log-jo-share-header.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { CustomFieldValueShareModule } from 'src/app/views/lib/custom-field-value/custom-field-value-share.module';

const COM = [
    TechLogJoShareAddComponent,
    TechLogJoShareDetailComponent,
    TechLogJoShareListComponent,
    TechLogJoShareHeaderComponent,
    TechLogJoShareWidgetComponent
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
export class TechLogJoShareModule { }
