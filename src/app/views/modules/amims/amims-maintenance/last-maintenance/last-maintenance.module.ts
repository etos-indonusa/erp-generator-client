import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LastMaintenanceRoutingModule } from './last-maintenance-routing.module';
import { LastMaintenanceListComponent } from './last-maintenance-list/last-maintenance-list.component';
import { LastMaintenanceShareModule } from './last-maintenance-share/last-maintenance-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    LastMaintenanceListComponent
  ],
  imports: [
    CommonModule,
    LastMaintenanceRoutingModule,
    LastMaintenanceShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class LastMaintenanceModule { }
