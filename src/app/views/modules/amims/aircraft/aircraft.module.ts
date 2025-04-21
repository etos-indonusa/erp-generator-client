import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AircraftRoutingModule } from './aircraft-routing.module';
import { AircraftListComponent } from './aircraft-list/aircraft-list.component';
import { AircraftShareModule } from './aircraft-share/aircraft-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    AircraftListComponent
  ],
  imports: [
    CommonModule,
    AircraftRoutingModule,
    AircraftShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class AircraftModule { }
