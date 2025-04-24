import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PositionRoutingModule } from './position-routing.module';
import { PositionListComponent } from './position-list/position-list.component';
import { PositionShareModule } from './position-share/position-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    PositionListComponent
  ],
  imports: [
    CommonModule,
    PositionRoutingModule,
    PositionShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class PositionModule { }
