import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MpcJoRoutingModule } from './mpc-jo-routing.module';
import { MpcJoListComponent } from './mpc-jo-list/mpc-jo-list.component';
import { MpcJoShareModule } from './mpc-jo-share/mpc-jo-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    MpcJoListComponent
  ],
  imports: [
    CommonModule,
    MpcJoRoutingModule,
    MpcJoShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class MpcJoModule { }
