import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { MpartShareAddComponent } from './mpart-share-add/mpart-share-add.component';
import { MpartShareDetailComponent } from './mpart-share-detail/mpart-share-detail.component'; 
import { MpartShareWidgetComponent } from './mpart-share-widget/mpart-share-widget.component';
import { MpartShareListComponent } from './mpart-share-list/mpart-share-list.component';
import { MpartShareHeaderComponent } from './mpart-share-header/mpart-share-header.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { CustomFieldValueShareModule } from 'src/app/views/lib/custom-field-value/custom-field-value-share.module';
import { PartShareModule } from '../../part/part-share/part-share.module';
 
const COM = [
    MpartShareAddComponent,
    MpartShareDetailComponent,
    MpartShareListComponent,
    MpartShareHeaderComponent,
    MpartShareWidgetComponent
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
        CustomFieldValueShareModule,
        PartShareModule
    ]
}) 
export class MpartShareModule { }
