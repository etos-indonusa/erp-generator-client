import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { MaintenanceProgramShareAddComponent } from './maintenance-program-share-add/maintenance-program-share-add.component';
import { MaintenanceProgramShareDetailComponent } from './maintenance-program-share-detail/maintenance-program-share-detail.component'; 
import { MaintenanceProgramShareWidgetComponent } from './maintenance-program-share-widget/maintenance-program-share-widget.component';
import { MaintenanceProgramShareListComponent } from './maintenance-program-share-list/maintenance-program-share-list.component';
import { MaintenanceProgramShareHeaderComponent } from './maintenance-program-share-header/maintenance-program-share-header.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { CustomFieldValueShareModule } from 'src/app/views/lib/custom-field-value/custom-field-value-share.module';
import { MaintenanceProgramDocumentModule } from "../maintenance-program-document/maintenance-program-document.module";
import { MaintenanceProgramMaterialModule } from "../maintenance-program-material/maintenance-program-material.module";
import { MaintenanceProgramTaskModule } from "../maintenance-program-task/maintenance-program-task.module";

const COM = [
    MaintenanceProgramShareAddComponent,
    MaintenanceProgramShareDetailComponent,
    MaintenanceProgramShareListComponent,
    MaintenanceProgramShareHeaderComponent,
    MaintenanceProgramShareWidgetComponent
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
    MaintenanceProgramDocumentModule,
    MaintenanceProgramMaterialModule,
    MaintenanceProgramTaskModule
]
}) 
export class MaintenanceProgramShareModule { }
