import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InspectionRoutingModule } from './inspection-routing.module';
import { InspectionListComponent } from './inspection-list/inspection-list.component';
import { InspectionShareModule } from './inspection-share/inspection-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    InspectionListComponent
  ],
  imports: [
    CommonModule,
    InspectionRoutingModule,
    InspectionShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class InspectionModule { }
