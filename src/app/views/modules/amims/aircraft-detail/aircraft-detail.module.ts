import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AircraftDetailRoutingModule } from './aircraft-detail-routing.module';
import { AircraftDetailListComponent } from './aircraft-detail-list/aircraft-detail-list.component';
import { AircraftDetailShareModule } from './aircraft-detail-share/aircraft-detail-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    AircraftDetailListComponent
  ],
  imports: [
    CommonModule,
    AircraftDetailRoutingModule,
    AircraftDetailShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class AircraftDetailModule { }
