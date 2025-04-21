import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RotaryFactorRoutingModule } from './rotary-factor-routing.module';
import { RotaryFactorListComponent } from './rotary-factor-list/rotary-factor-list.component';
import { RotaryFactorShareModule } from './rotary-factor-share/rotary-factor-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    RotaryFactorListComponent
  ],
  imports: [
    CommonModule,
    RotaryFactorRoutingModule,
    RotaryFactorShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class RotaryFactorModule { }
