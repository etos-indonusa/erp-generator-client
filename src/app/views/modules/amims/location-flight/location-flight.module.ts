import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationFlightRoutingModule } from './location-flight-routing.module';
import { LocationFlightListComponent } from './location-flight-list/location-flight-list.component';
import { LocationFlightShareModule } from './location-flight-share/location-flight-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    LocationFlightListComponent
  ],
  imports: [
    CommonModule,
    LocationFlightRoutingModule,
    LocationFlightShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class LocationFlightModule { }
