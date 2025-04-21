import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { PartShareAddComponent } from './part-share-add/part-share-add.component';
import { PartShareDetailComponent } from './part-share-detail/part-share-detail.component'; 
import { PartShareWidgetComponent } from './part-share-widget/part-share-widget.component';
import { PartShareListComponent } from './part-share-list/part-share-list.component';
import { PartShareHeaderComponent } from './part-share-header/part-share-header.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { CustomFieldValueShareModule } from 'src/app/views/lib/custom-field-value/custom-field-value-share.module';

const COM = [
    PartShareAddComponent,
    PartShareDetailComponent,
    PartShareListComponent,
    PartShareHeaderComponent,
    PartShareWidgetComponent
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
export class PartShareModule { }
