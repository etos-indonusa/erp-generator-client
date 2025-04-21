import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { EngineerRtiPartShareAddComponent } from './engineer-rti-part-share-add/engineer-rti-part-share-add.component';
import { EngineerRtiPartShareDetailComponent } from './engineer-rti-part-share-detail/engineer-rti-part-share-detail.component'; 
import { EngineerRtiPartShareWidgetComponent } from './engineer-rti-part-share-widget/engineer-rti-part-share-widget.component';
import { EngineerRtiPartShareListComponent } from './engineer-rti-part-share-list/engineer-rti-part-share-list.component';
import { EngineerRtiPartShareHeaderComponent } from './engineer-rti-part-share-header/engineer-rti-part-share-header.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { CustomFieldValueShareModule } from 'src/app/views/lib/custom-field-value/custom-field-value-share.module';

const COM = [
    EngineerRtiPartShareAddComponent,
    EngineerRtiPartShareDetailComponent,
    EngineerRtiPartShareListComponent,
    EngineerRtiPartShareHeaderComponent,
    EngineerRtiPartShareWidgetComponent
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
export class EngineerRtiPartShareModule { }
