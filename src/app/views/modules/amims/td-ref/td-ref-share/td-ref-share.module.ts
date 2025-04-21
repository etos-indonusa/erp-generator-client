import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { TdRefShareAddComponent } from './td-ref-share-add/td-ref-share-add.component';
import { TdRefShareDetailComponent } from './td-ref-share-detail/td-ref-share-detail.component'; 
import { TdRefShareWidgetComponent } from './td-ref-share-widget/td-ref-share-widget.component';
import { TdRefShareListComponent } from './td-ref-share-list/td-ref-share-list.component';
import { TdRefShareHeaderComponent } from './td-ref-share-header/td-ref-share-header.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { CustomFieldValueShareModule } from 'src/app/views/lib/custom-field-value/custom-field-value-share.module';

const COM = [
    TdRefShareAddComponent,
    TdRefShareDetailComponent,
    TdRefShareListComponent,
    TdRefShareHeaderComponent,
    TdRefShareWidgetComponent
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
export class TdRefShareModule { }
