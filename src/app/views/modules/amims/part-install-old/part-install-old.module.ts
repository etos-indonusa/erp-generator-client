import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartInstallOldRoutingModule } from './part-install-old-routing.module';
import { PartInstallOldListComponent } from './part-install-old-list/part-install-old-list.component';
import { PartInstallOldShareModule } from './part-install-old-share/part-install-old-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    PartInstallOldListComponent
  ],
  imports: [
    CommonModule,
    PartInstallOldRoutingModule,
    PartInstallOldShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class PartInstallOldModule { }
