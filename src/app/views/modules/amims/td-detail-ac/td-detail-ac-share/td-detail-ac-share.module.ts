import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { TdDetailAcShareAddComponent } from './td-detail-ac-share-add/td-detail-ac-share-add.component';
import { TdDetailAcShareDetailComponent } from './td-detail-ac-share-detail/td-detail-ac-share-detail.component'; 
import { TdDetailAcShareWidgetComponent } from './td-detail-ac-share-widget/td-detail-ac-share-widget.component';
import { TdDetailAcShareListComponent } from './td-detail-ac-share-list/td-detail-ac-share-list.component';
import { TdDetailAcShareHeaderComponent } from './td-detail-ac-share-header/td-detail-ac-share-header.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { CustomFieldValueShareModule } from 'src/app/views/lib/custom-field-value/custom-field-value-share.module';

const COM = [
    TdDetailAcShareAddComponent,
    TdDetailAcShareDetailComponent,
    TdDetailAcShareListComponent,
    TdDetailAcShareHeaderComponent,
    TdDetailAcShareWidgetComponent
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
export class TdDetailAcShareModule { }
