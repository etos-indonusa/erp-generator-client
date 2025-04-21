import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { EngineerRtiIdentifyShareAddComponent } from './engineer-rti-identify-share-add/engineer-rti-identify-share-add.component';
import { EngineerRtiIdentifyShareDetailComponent } from './engineer-rti-identify-share-detail/engineer-rti-identify-share-detail.component'; 
import { EngineerRtiIdentifyShareWidgetComponent } from './engineer-rti-identify-share-widget/engineer-rti-identify-share-widget.component';
import { EngineerRtiIdentifyShareListComponent } from './engineer-rti-identify-share-list/engineer-rti-identify-share-list.component';
import { EngineerRtiIdentifyShareHeaderComponent } from './engineer-rti-identify-share-header/engineer-rti-identify-share-header.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { CustomFieldValueShareModule } from 'src/app/views/lib/custom-field-value/custom-field-value-share.module';

const COM = [
    EngineerRtiIdentifyShareAddComponent,
    EngineerRtiIdentifyShareDetailComponent,
    EngineerRtiIdentifyShareListComponent,
    EngineerRtiIdentifyShareHeaderComponent,
    EngineerRtiIdentifyShareWidgetComponent
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
export class EngineerRtiIdentifyShareModule { }
