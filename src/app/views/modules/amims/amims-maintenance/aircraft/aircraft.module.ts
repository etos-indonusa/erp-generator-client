import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AircraftRoutingModule } from './aircraft-routing.module';
import { AircraftListComponent } from './aircraft-list/aircraft-list.component';
import { AircraftShareModule } from './aircraft-share/aircraft-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { NzImageModule } from 'ng-zorro-antd/image';
import { RouterModule } from '@angular/router';
import { AirctatDetailComponent } from './airctat-detail/airctat-detail.component';
import { AircraftDetailShareModule } from "../aircraft-detail/aircraft-detail-share/aircraft-detail-share.module";
import { ScheduleMaintenanceComponent } from './schedule-maintenance/schedule-maintenance.component';
import { ScheduleMaintenanceRtComponent } from './schedule-maintenance/schedule-maintenance-rt/schedule-maintenance-rt.component';
import { ScheduleMaintenanceInComponent } from './schedule-maintenance/schedule-maintenance-in/schedule-maintenance-in.component';
import { ScheduleMaintenanceOhComponent } from './schedule-maintenance/schedule-maintenance-oh/schedule-maintenance-oh.component';
import { PartInstallShareModule } from "../../amims-inventory/part/part-install-share/part-install-share.module";
import { VDueListOutputShareModule } from "../v-due-list-output/v-due-list-output-share/v-due-list-output-share.module";

@NgModule({
    declarations: [
        AircraftListComponent,
        AirctatDetailComponent,
        ScheduleMaintenanceComponent,
        ScheduleMaintenanceRtComponent,
        ScheduleMaintenanceInComponent,
        ScheduleMaintenanceOhComponent
    ],
    imports: [
    CommonModule,
    AircraftRoutingModule,
    AircraftShareModule,
    AntSimpleModule,
    TampilanModule,
    NzImageModule,
    RouterModule,
    AircraftDetailShareModule,
    PartInstallShareModule,
    VDueListOutputShareModule
]
})
export class AircraftModule { }
