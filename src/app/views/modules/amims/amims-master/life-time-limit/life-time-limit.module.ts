import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LifeTimeLimitRoutingModule } from './life-time-limit-routing.module';
import { LifeTimeLimitListComponent } from './life-time-limit-list/life-time-limit-list.component';
import { LifeTimeLimitShareModule } from './life-time-limit-share/life-time-limit-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    LifeTimeLimitListComponent
  ],
  imports: [
    CommonModule,
    LifeTimeLimitRoutingModule,
    LifeTimeLimitShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class LifeTimeLimitModule { }
