import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MpcSelfMaintenanceRoutingModule } from './mpc-self-maintenance-routing.module';
import { MpcSelfMaintenanceListComponent } from './mpc-self-maintenance-list/mpc-self-maintenance-list.component';
import { MpcSelfMaintenanceShareModule } from './mpc-self-maintenance-share/mpc-self-maintenance-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    MpcSelfMaintenanceListComponent
  ],
  imports: [
    CommonModule,
    MpcSelfMaintenanceRoutingModule,
    MpcSelfMaintenanceShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class MpcSelfMaintenanceModule { }
