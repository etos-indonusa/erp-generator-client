import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaintenanceCodeReferenceRoutingModule } from './maintenance-code-reference-routing.module';
import { MaintenanceCodeReferenceListComponent } from './maintenance-code-reference-list/maintenance-code-reference-list.component';
import { MaintenanceCodeReferenceShareModule } from './maintenance-code-reference-share/maintenance-code-reference-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    MaintenanceCodeReferenceListComponent
  ],
  imports: [
    CommonModule,
    MaintenanceCodeReferenceRoutingModule,
    MaintenanceCodeReferenceShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class MaintenanceCodeReferenceModule { }
