import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { DueListOutputShareAddComponent } from './due-list-output-share-add/due-list-output-share-add.component';
import { DueListOutputShareDetailComponent } from './due-list-output-share-detail/due-list-output-share-detail.component'; 
import { DueListOutputShareWidgetComponent } from './due-list-output-share-widget/due-list-output-share-widget.component';
import { DueListOutputShareListComponent } from './due-list-output-share-list/due-list-output-share-list.component';
import { DueListOutputShareHeaderComponent } from './due-list-output-share-header/due-list-output-share-header.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { CustomFieldValueShareModule } from 'src/app/views/lib/custom-field-value/custom-field-value-share.module';

const COM = [
    DueListOutputShareAddComponent,
    DueListOutputShareDetailComponent,
    DueListOutputShareListComponent,
    DueListOutputShareHeaderComponent,
    DueListOutputShareWidgetComponent
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
export class DueListOutputShareModule { }
