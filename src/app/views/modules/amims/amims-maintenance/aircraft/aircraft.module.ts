import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AircraftRoutingModule } from './aircraft-routing.module';
import { AircraftListComponent } from './aircraft-list/aircraft-list.component';
import { AircraftShareModule } from './aircraft-share/aircraft-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { NzImageModule } from 'ng-zorro-antd/image'; 
import { RouterModule } from '@angular/router';
import { AirctatDetailComponent } from './airctat-detail/airctat-detail.component';
import { AircraftDetailShareModule } from "../aircraft-detail/aircraft-detail-share/aircraft-detail-share.module";

@NgModule({
    declarations: [
        AircraftListComponent,
        AirctatDetailComponent
    ],
    imports: [
    CommonModule,
    AircraftRoutingModule,
    AircraftShareModule,
    AntSimpleModule,
    TampilanModule,
    NzImageModule,
    RouterModule,
        AircraftDetailShareModule
]
})
export class AircraftModule { }
