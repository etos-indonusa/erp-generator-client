import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartFigureIndexRoutingModule } from './part-figure-index-routing.module';
import { PartFigureIndexListComponent } from './part-figure-index-list/part-figure-index-list.component';
import { PartFigureIndexShareModule } from './part-figure-index-share/part-figure-index-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    PartFigureIndexListComponent
  ],
  exports: [
    PartFigureIndexListComponent
  ],
  imports: [
    CommonModule,
    PartFigureIndexRoutingModule,
    PartFigureIndexShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class PartFigureIndexModule { }
