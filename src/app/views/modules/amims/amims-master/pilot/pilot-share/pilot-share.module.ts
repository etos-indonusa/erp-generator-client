import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { PilotShareAddComponent } from './pilot-share-add/pilot-share-add.component';
import { PilotShareDetailComponent } from './pilot-share-detail/pilot-share-detail.component'; 
import { PilotShareWidgetComponent } from './pilot-share-widget/pilot-share-widget.component';
import { PilotShareListComponent } from './pilot-share-list/pilot-share-list.component';
import { PilotShareHeaderComponent } from './pilot-share-header/pilot-share-header.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { CustomFieldValueShareModule } from 'src/app/views/lib/custom-field-value/custom-field-value-share.module';

const COM = [
    PilotShareAddComponent,
    PilotShareDetailComponent,
    PilotShareListComponent,
    PilotShareHeaderComponent,
    PilotShareWidgetComponent
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
export class PilotShareModule { }
