import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaintenanceCodeFormIssuedRoutingModule } from './maintenance-code-form-issued-routing.module';
import { MaintenanceCodeFormIssuedListComponent } from './maintenance-code-form-issued-list/maintenance-code-form-issued-list.component';
import { MaintenanceCodeFormIssuedShareModule } from './maintenance-code-form-issued-share/maintenance-code-form-issued-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    MaintenanceCodeFormIssuedListComponent
  ],
  imports: [
    CommonModule,
    MaintenanceCodeFormIssuedRoutingModule,
    MaintenanceCodeFormIssuedShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class MaintenanceCodeFormIssuedModule { }
