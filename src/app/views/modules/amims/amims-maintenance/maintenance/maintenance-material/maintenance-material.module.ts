import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaintenanceMaterialRoutingModule } from './maintenance-material-routing.module';
import { MaintenanceMaterialListComponent } from './maintenance-material-list/maintenance-material-list.component';
import { MaintenanceMaterialShareModule } from './maintenance-material-share/maintenance-material-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    MaintenanceMaterialListComponent
  ],
  exports: [
    MaintenanceMaterialListComponent
  ],
  imports: [
    CommonModule,
    MaintenanceMaterialRoutingModule,
    MaintenanceMaterialShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class MaintenanceMaterialModule { }
