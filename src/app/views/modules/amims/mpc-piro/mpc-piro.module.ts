import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MpcPiroRoutingModule } from './mpc-piro-routing.module';
import { MpcPiroListComponent } from './mpc-piro-list/mpc-piro-list.component';
import { MpcPiroShareModule } from './mpc-piro-share/mpc-piro-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    MpcPiroListComponent
  ],
  imports: [
    CommonModule,
    MpcPiroRoutingModule,
    MpcPiroShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class MpcPiroModule { }
