import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaintenanceCodeRoutingModule } from './maintenance-code-routing.module';
import { MaintenanceCodeListComponent } from './maintenance-code-list/maintenance-code-list.component';
import { MaintenanceCodeShareModule } from './maintenance-code-share/maintenance-code-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    MaintenanceCodeListComponent
  ],
  imports: [
    CommonModule,
    MaintenanceCodeRoutingModule,
    MaintenanceCodeShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class MaintenanceCodeModule { }
