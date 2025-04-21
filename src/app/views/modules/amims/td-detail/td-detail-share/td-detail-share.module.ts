import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { TdDetailShareAddComponent } from './td-detail-share-add/td-detail-share-add.component';
import { TdDetailShareDetailComponent } from './td-detail-share-detail/td-detail-share-detail.component'; 
import { TdDetailShareWidgetComponent } from './td-detail-share-widget/td-detail-share-widget.component';
import { TdDetailShareListComponent } from './td-detail-share-list/td-detail-share-list.component';
import { TdDetailShareHeaderComponent } from './td-detail-share-header/td-detail-share-header.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { CustomFieldValueShareModule } from 'src/app/views/lib/custom-field-value/custom-field-value-share.module';

const COM = [
    TdDetailShareAddComponent,
    TdDetailShareDetailComponent,
    TdDetailShareListComponent,
    TdDetailShareHeaderComponent,
    TdDetailShareWidgetComponent
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
export class TdDetailShareModule { }
