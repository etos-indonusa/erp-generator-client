import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { EngineerRtiShareAddComponent } from './engineer-rti-share-add/engineer-rti-share-add.component';
import { EngineerRtiShareDetailComponent } from './engineer-rti-share-detail/engineer-rti-share-detail.component'; 
import { EngineerRtiShareWidgetComponent } from './engineer-rti-share-widget/engineer-rti-share-widget.component';
import { EngineerRtiShareListComponent } from './engineer-rti-share-list/engineer-rti-share-list.component';
import { EngineerRtiShareHeaderComponent } from './engineer-rti-share-header/engineer-rti-share-header.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { CustomFieldValueShareModule } from 'src/app/views/lib/custom-field-value/custom-field-value-share.module';

const COM = [
    EngineerRtiShareAddComponent,
    EngineerRtiShareDetailComponent,
    EngineerRtiShareListComponent,
    EngineerRtiShareHeaderComponent,
    EngineerRtiShareWidgetComponent
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
export class EngineerRtiShareModule { }
