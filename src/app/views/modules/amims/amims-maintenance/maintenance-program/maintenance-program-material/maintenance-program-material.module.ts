import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaintenanceProgramMaterialRoutingModule } from './maintenance-program-material-routing.module';
import { MaintenanceProgramMaterialListComponent } from './maintenance-program-material-list/maintenance-program-material-list.component';
import { MaintenanceProgramMaterialShareModule } from './maintenance-program-material-share/maintenance-program-material-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    MaintenanceProgramMaterialListComponent
  ],
  exports: [
    MaintenanceProgramMaterialListComponent
  ],
  imports: [
    CommonModule,
    MaintenanceProgramMaterialRoutingModule,
    MaintenanceProgramMaterialShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class MaintenanceProgramMaterialModule { }
