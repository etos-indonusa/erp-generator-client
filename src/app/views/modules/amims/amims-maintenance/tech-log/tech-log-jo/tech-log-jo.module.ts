import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechLogJoRoutingModule } from './tech-log-jo-routing.module';
import { TechLogJoListComponent } from './tech-log-jo-list/tech-log-jo-list.component';
import { TechLogJoShareModule } from './tech-log-jo-share/tech-log-jo-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    TechLogJoListComponent
  ],
  imports: [
    CommonModule,
    TechLogJoRoutingModule,
    TechLogJoShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class TechLogJoModule { }
