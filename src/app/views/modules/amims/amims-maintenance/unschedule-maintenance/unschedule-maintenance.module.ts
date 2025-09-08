import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnscheduleMaintenanceRoutingModule } from './unschedule-maintenance-routing.module';
import { UnscheduleMaintenanceListComponent } from './unschedule-maintenance-list/unschedule-maintenance-list.component';
import { UnscheduleMaintenanceShareModule } from './unschedule-maintenance-share/unschedule-maintenance-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
    declarations: [
        UnscheduleMaintenanceListComponent
    ],
    imports: [
        CommonModule,
        UnscheduleMaintenanceRoutingModule,
        UnscheduleMaintenanceShareModule,
        AntSimpleModule,
        TampilanModule
    ]
})
export class UnscheduleMaintenanceModule { }
