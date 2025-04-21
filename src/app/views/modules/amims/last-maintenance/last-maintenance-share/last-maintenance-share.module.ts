import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { LastMaintenanceShareAddComponent } from './last-maintenance-share-add/last-maintenance-share-add.component';
import { LastMaintenanceShareDetailComponent } from './last-maintenance-share-detail/last-maintenance-share-detail.component'; 
import { LastMaintenanceShareWidgetComponent } from './last-maintenance-share-widget/last-maintenance-share-widget.component';
import { LastMaintenanceShareListComponent } from './last-maintenance-share-list/last-maintenance-share-list.component';
import { LastMaintenanceShareHeaderComponent } from './last-maintenance-share-header/last-maintenance-share-header.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { CustomFieldValueShareModule } from 'src/app/views/lib/custom-field-value/custom-field-value-share.module';

const COM = [
    LastMaintenanceShareAddComponent,
    LastMaintenanceShareDetailComponent,
    LastMaintenanceShareListComponent,
    LastMaintenanceShareHeaderComponent,
    LastMaintenanceShareWidgetComponent
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
export class LastMaintenanceShareModule { }
