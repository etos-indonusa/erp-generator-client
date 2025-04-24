import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechLogRoutingModule } from './tech-log-routing.module';
import { TechLogListComponent } from './tech-log-list/tech-log-list.component';
import { TechLogShareModule } from './tech-log-share/tech-log-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    TechLogListComponent
  ],
  imports: [
    CommonModule,
    TechLogRoutingModule,
    TechLogShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class TechLogModule { }
