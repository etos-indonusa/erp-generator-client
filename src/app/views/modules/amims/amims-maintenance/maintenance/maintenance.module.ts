import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaintenanceRoutingModule } from './maintenance-routing.module';
import { MaintenanceListComponent } from './maintenance-list/maintenance-list.component';
import { MaintenanceShareModule } from './maintenance-share/maintenance-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module'; 


@NgModule({
  declarations: [
    MaintenanceListComponent,  
  ],
  imports: [
    CommonModule,
    MaintenanceRoutingModule,
    MaintenanceShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class MaintenanceModule { }
