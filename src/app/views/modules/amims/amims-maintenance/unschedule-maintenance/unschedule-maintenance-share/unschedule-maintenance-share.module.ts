import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { UnscheduleMaintenanceShareAddComponent } from './unschedule-maintenance-share-add/unschedule-maintenance-share-add.component';
import { UnscheduleMaintenanceShareDetailComponent } from './unschedule-maintenance-share-detail/unschedule-maintenance-share-detail.component'; 
import { UnscheduleMaintenanceShareWidgetComponent } from './unschedule-maintenance-share-widget/unschedule-maintenance-share-widget.component';
import { UnscheduleMaintenanceShareListComponent } from './unschedule-maintenance-share-list/unschedule-maintenance-share-list.component';
import { UnscheduleMaintenanceShareHeaderComponent } from './unschedule-maintenance-share-header/unschedule-maintenance-share-header.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { CustomFieldValueShareModule } from 'src/app/views/lib/custom-field-value/custom-field-value-share.module';
import { WpJoShareModule } from "../../wp-jo/wp-jo-share/wp-jo-share.module";

const COM = [
    UnscheduleMaintenanceShareAddComponent,
    UnscheduleMaintenanceShareDetailComponent,
    UnscheduleMaintenanceShareListComponent,
    UnscheduleMaintenanceShareHeaderComponent,
    UnscheduleMaintenanceShareWidgetComponent
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
    WpJoShareModule
]
}) 
export class UnscheduleMaintenanceShareModule { }
