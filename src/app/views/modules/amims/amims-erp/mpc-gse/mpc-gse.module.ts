import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MpcGseRoutingModule } from './mpc-gse-routing.module';
import { MpcGseListComponent } from './mpc-gse-list/mpc-gse-list.component';
import { MpcGseShareModule } from './mpc-gse-share/mpc-gse-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    MpcGseListComponent
  ],
  imports: [
    CommonModule,
    MpcGseRoutingModule,
    MpcGseShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class MpcGseModule { }
