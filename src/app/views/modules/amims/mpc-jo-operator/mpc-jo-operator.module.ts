import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MpcJoOperatorRoutingModule } from './mpc-jo-operator-routing.module';
import { MpcJoOperatorListComponent } from './mpc-jo-operator-list/mpc-jo-operator-list.component';
import { MpcJoOperatorShareModule } from './mpc-jo-operator-share/mpc-jo-operator-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    MpcJoOperatorListComponent
  ],
  imports: [
    CommonModule,
    MpcJoOperatorRoutingModule,
    MpcJoOperatorShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class MpcJoOperatorModule { }
