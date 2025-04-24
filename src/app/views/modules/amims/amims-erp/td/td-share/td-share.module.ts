import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { TdShareAddComponent } from './td-share-add/td-share-add.component';
import { TdShareDetailComponent } from './td-share-detail/td-share-detail.component'; 
import { TdShareWidgetComponent } from './td-share-widget/td-share-widget.component';
import { TdShareListComponent } from './td-share-list/td-share-list.component';
import { TdShareHeaderComponent } from './td-share-header/td-share-header.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { CustomFieldValueShareModule } from 'src/app/views/lib/custom-field-value/custom-field-value-share.module';

const COM = [
    TdShareAddComponent,
    TdShareDetailComponent,
    TdShareListComponent,
    TdShareHeaderComponent,
    TdShareWidgetComponent
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
export class TdShareModule { }
