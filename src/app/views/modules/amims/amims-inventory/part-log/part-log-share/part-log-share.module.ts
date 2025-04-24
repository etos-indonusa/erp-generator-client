import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { PartLogShareAddComponent } from './part-log-share-add/part-log-share-add.component';
import { PartLogShareDetailComponent } from './part-log-share-detail/part-log-share-detail.component'; 
import { PartLogShareWidgetComponent } from './part-log-share-widget/part-log-share-widget.component';
import { PartLogShareListComponent } from './part-log-share-list/part-log-share-list.component';
import { PartLogShareHeaderComponent } from './part-log-share-header/part-log-share-header.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { CustomFieldValueShareModule } from 'src/app/views/lib/custom-field-value/custom-field-value-share.module';

const COM = [
    PartLogShareAddComponent,
    PartLogShareDetailComponent,
    PartLogShareListComponent,
    PartLogShareHeaderComponent,
    PartLogShareWidgetComponent
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
export class PartLogShareModule { }
