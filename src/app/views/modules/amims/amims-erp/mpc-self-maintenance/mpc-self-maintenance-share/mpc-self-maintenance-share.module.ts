import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { MpcSelfMaintenanceShareAddComponent } from './mpc-self-maintenance-share-add/mpc-self-maintenance-share-add.component';
import { MpcSelfMaintenanceShareDetailComponent } from './mpc-self-maintenance-share-detail/mpc-self-maintenance-share-detail.component'; 
import { MpcSelfMaintenanceShareWidgetComponent } from './mpc-self-maintenance-share-widget/mpc-self-maintenance-share-widget.component';
import { MpcSelfMaintenanceShareListComponent } from './mpc-self-maintenance-share-list/mpc-self-maintenance-share-list.component';
import { MpcSelfMaintenanceShareHeaderComponent } from './mpc-self-maintenance-share-header/mpc-self-maintenance-share-header.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { CustomFieldValueShareModule } from 'src/app/views/lib/custom-field-value/custom-field-value-share.module';

const COM = [
    MpcSelfMaintenanceShareAddComponent,
    MpcSelfMaintenanceShareDetailComponent,
    MpcSelfMaintenanceShareListComponent,
    MpcSelfMaintenanceShareHeaderComponent,
    MpcSelfMaintenanceShareWidgetComponent
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
export class MpcSelfMaintenanceShareModule { }
