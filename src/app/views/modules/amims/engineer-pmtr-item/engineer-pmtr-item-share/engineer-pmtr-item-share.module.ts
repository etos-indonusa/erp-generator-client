import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { EngineerPmtrItemShareAddComponent } from './engineer-pmtr-item-share-add/engineer-pmtr-item-share-add.component';
import { EngineerPmtrItemShareDetailComponent } from './engineer-pmtr-item-share-detail/engineer-pmtr-item-share-detail.component'; 
import { EngineerPmtrItemShareWidgetComponent } from './engineer-pmtr-item-share-widget/engineer-pmtr-item-share-widget.component';
import { EngineerPmtrItemShareListComponent } from './engineer-pmtr-item-share-list/engineer-pmtr-item-share-list.component';
import { EngineerPmtrItemShareHeaderComponent } from './engineer-pmtr-item-share-header/engineer-pmtr-item-share-header.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { CustomFieldValueShareModule } from 'src/app/views/lib/custom-field-value/custom-field-value-share.module';

const COM = [
    EngineerPmtrItemShareAddComponent,
    EngineerPmtrItemShareDetailComponent,
    EngineerPmtrItemShareListComponent,
    EngineerPmtrItemShareHeaderComponent,
    EngineerPmtrItemShareWidgetComponent
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
export class EngineerPmtrItemShareModule { }
