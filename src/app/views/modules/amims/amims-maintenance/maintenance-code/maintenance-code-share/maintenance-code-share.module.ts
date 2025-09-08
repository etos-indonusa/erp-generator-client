import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { MaintenanceCodeShareAddComponent } from './maintenance-code-share-add/maintenance-code-share-add.component';
import { MaintenanceCodeShareDetailComponent } from './maintenance-code-share-detail/maintenance-code-share-detail.component'; 
import { MaintenanceCodeShareWidgetComponent } from './maintenance-code-share-widget/maintenance-code-share-widget.component';
import { MaintenanceCodeShareListComponent } from './maintenance-code-share-list/maintenance-code-share-list.component';
import { MaintenanceCodeShareHeaderComponent } from './maintenance-code-share-header/maintenance-code-share-header.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { CustomFieldValueShareModule } from 'src/app/views/lib/custom-field-value/custom-field-value-share.module';

const COM = [
    MaintenanceCodeShareAddComponent,
    MaintenanceCodeShareDetailComponent,
    MaintenanceCodeShareListComponent,
    MaintenanceCodeShareHeaderComponent,
    MaintenanceCodeShareWidgetComponent
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
export class MaintenanceCodeShareModule { }
