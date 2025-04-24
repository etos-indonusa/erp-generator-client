import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartInstallRoutingModule } from './part-install-routing.module';
import { PartInstallListComponent } from './part-install-list/part-install-list.component';
import { PartInstallShareModule } from './part-install-share/part-install-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    PartInstallListComponent
  ],
  imports: [
    CommonModule,
    PartInstallRoutingModule,
    PartInstallShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class PartInstallModule { }
