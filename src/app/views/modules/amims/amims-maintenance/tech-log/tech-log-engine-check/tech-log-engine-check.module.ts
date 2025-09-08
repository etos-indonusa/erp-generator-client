import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechLogEngineCheckRoutingModule } from './tech-log-engine-check-routing.module';
import { TechLogEngineCheckListComponent } from './tech-log-engine-check-list/tech-log-engine-check-list.component';
import { TechLogEngineCheckShareModule } from './tech-log-engine-check-share/tech-log-engine-check-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    TechLogEngineCheckListComponent
  ],
  imports: [
    CommonModule,
    TechLogEngineCheckRoutingModule,
    TechLogEngineCheckShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class TechLogEngineCheckModule { }
