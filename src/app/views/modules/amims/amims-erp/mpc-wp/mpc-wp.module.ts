import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MpcWpRoutingModule } from './mpc-wp-routing.module';
import { MpcWpListComponent } from './mpc-wp-list/mpc-wp-list.component';
import { MpcWpShareModule } from './mpc-wp-share/mpc-wp-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    MpcWpListComponent
  ],
  imports: [
    CommonModule,
    MpcWpRoutingModule,
    MpcWpShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class MpcWpModule { }
