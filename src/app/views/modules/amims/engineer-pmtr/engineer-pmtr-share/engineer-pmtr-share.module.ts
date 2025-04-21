import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { EngineerPmtrShareAddComponent } from './engineer-pmtr-share-add/engineer-pmtr-share-add.component';
import { EngineerPmtrShareDetailComponent } from './engineer-pmtr-share-detail/engineer-pmtr-share-detail.component'; 
import { EngineerPmtrShareWidgetComponent } from './engineer-pmtr-share-widget/engineer-pmtr-share-widget.component';
import { EngineerPmtrShareListComponent } from './engineer-pmtr-share-list/engineer-pmtr-share-list.component';
import { EngineerPmtrShareHeaderComponent } from './engineer-pmtr-share-header/engineer-pmtr-share-header.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { CustomFieldValueShareModule } from 'src/app/views/lib/custom-field-value/custom-field-value-share.module';

const COM = [
    EngineerPmtrShareAddComponent,
    EngineerPmtrShareDetailComponent,
    EngineerPmtrShareListComponent,
    EngineerPmtrShareHeaderComponent,
    EngineerPmtrShareWidgetComponent
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
export class EngineerPmtrShareModule { }
