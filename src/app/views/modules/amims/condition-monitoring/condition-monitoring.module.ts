import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConditionMonitoringRoutingModule } from './condition-monitoring-routing.module';
import { ConditionMonitoringListComponent } from './condition-monitoring-list/condition-monitoring-list.component';
import { ConditionMonitoringShareModule } from './condition-monitoring-share/condition-monitoring-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    ConditionMonitoringListComponent
  ],
  imports: [
    CommonModule,
    ConditionMonitoringRoutingModule,
    ConditionMonitoringShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class ConditionMonitoringModule { }
