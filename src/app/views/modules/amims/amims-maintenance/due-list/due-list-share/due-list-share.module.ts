import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { DueListShareAddComponent } from './due-list-share-add/due-list-share-add.component';
import { DueListShareDetailComponent } from './due-list-share-detail/due-list-share-detail.component'; 
import { DueListShareWidgetComponent } from './due-list-share-widget/due-list-share-widget.component';
import { DueListShareListComponent } from './due-list-share-list/due-list-share-list.component';
import { DueListShareHeaderComponent } from './due-list-share-header/due-list-share-header.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { CustomFieldValueShareModule } from 'src/app/views/lib/custom-field-value/custom-field-value-share.module';

const COM = [
    DueListShareAddComponent,
    DueListShareDetailComponent,
    DueListShareListComponent,
    DueListShareHeaderComponent,
    DueListShareWidgetComponent
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
export class DueListShareModule { }
