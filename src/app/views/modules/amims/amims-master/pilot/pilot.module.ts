import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PilotRoutingModule } from './pilot-routing.module';
import { PilotListComponent } from './pilot-list/pilot-list.component';
import { PilotShareModule } from './pilot-share/pilot-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    PilotListComponent
  ],
  imports: [
    CommonModule,
    PilotRoutingModule,
    PilotShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class PilotModule { }
