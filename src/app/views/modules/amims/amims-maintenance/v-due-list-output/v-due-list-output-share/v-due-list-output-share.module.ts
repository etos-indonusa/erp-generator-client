import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { VDueListOutputShareAddComponent } from './v-due-list-output-share-add/v-due-list-output-share-add.component';
import { VDueListOutputShareDetailComponent } from './v-due-list-output-share-detail/v-due-list-output-share-detail.component'; 
import { VDueListOutputShareWidgetComponent } from './v-due-list-output-share-widget/v-due-list-output-share-widget.component';
import { VDueListOutputShareListComponent } from './v-due-list-output-share-list/v-due-list-output-share-list.component';
import { VDueListOutputShareHeaderComponent } from './v-due-list-output-share-header/v-due-list-output-share-header.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { CustomFieldValueShareModule } from 'src/app/views/lib/custom-field-value/custom-field-value-share.module';

const COM = [
    VDueListOutputShareAddComponent,
    VDueListOutputShareDetailComponent,
    VDueListOutputShareListComponent,
    VDueListOutputShareHeaderComponent,
    VDueListOutputShareWidgetComponent
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
export class VDueListOutputShareModule { }
