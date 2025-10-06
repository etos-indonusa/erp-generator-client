import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaintenanceProgramDocumentRoutingModule } from './maintenance-program-document-routing.module';
import { MaintenanceProgramDocumentListComponent } from './maintenance-program-document-list/maintenance-program-document-list.component';
import { MaintenanceProgramDocumentShareModule } from './maintenance-program-document-share/maintenance-program-document-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    MaintenanceProgramDocumentListComponent
  ],
  exports: [
    MaintenanceProgramDocumentListComponent
  ],
  imports: [
    CommonModule,
    MaintenanceProgramDocumentRoutingModule,
    MaintenanceProgramDocumentShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class MaintenanceProgramDocumentModule { }
