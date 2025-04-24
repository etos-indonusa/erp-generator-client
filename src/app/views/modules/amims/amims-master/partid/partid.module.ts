import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartidRoutingModule } from './partid-routing.module';
import { PartidListComponent } from './partid-list/partid-list.component';
import { PartidShareModule } from './partid-share/partid-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    PartidListComponent
  ],
  imports: [
    CommonModule,
    PartidRoutingModule,
    PartidShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class PartidModule { }
