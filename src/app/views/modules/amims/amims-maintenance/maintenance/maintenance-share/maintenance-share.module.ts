import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { MaintenanceShareAddComponent } from './maintenance-share-add/maintenance-share-add.component';
import { MaintenanceShareDetailComponent } from './maintenance-share-detail/maintenance-share-detail.component'; 
import { MaintenanceShareWidgetComponent } from './maintenance-share-widget/maintenance-share-widget.component';
import { MaintenanceShareListComponent } from './maintenance-share-list/maintenance-share-list.component';
import { MaintenanceShareHeaderComponent } from './maintenance-share-header/maintenance-share-header.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { CustomFieldValueShareModule } from 'src/app/views/lib/custom-field-value/custom-field-value-share.module';
import { MaintenanceDocumentModule } from "../maintenance-document/maintenance-document.module";
import { MaintenanceMaterialModule } from "../maintenance-material/maintenance-material.module";

const COM = [
    MaintenanceShareAddComponent,
    MaintenanceShareDetailComponent,
    MaintenanceShareListComponent,
    MaintenanceShareHeaderComponent,
    MaintenanceShareWidgetComponent
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
    MaintenanceDocumentModule,
    MaintenanceMaterialModule
]
}) 
export class MaintenanceShareModule { }
