import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechLogEngineRoutingModule } from './tech-log-engine-routing.module';
import { TechLogEngineListComponent } from './tech-log-engine-list/tech-log-engine-list.component';
import { TechLogEngineShareModule } from './tech-log-engine-share/tech-log-engine-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    TechLogEngineListComponent
  ],
  imports: [
    CommonModule,
    TechLogEngineRoutingModule,
    TechLogEngineShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class TechLogEngineModule { }
