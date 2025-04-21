import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechLogItemRoutingModule } from './tech-log-item-routing.module';
import { TechLogItemListComponent } from './tech-log-item-list/tech-log-item-list.component';
import { TechLogItemShareModule } from './tech-log-item-share/tech-log-item-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    TechLogItemListComponent
  ],
  imports: [
    CommonModule,
    TechLogItemRoutingModule,
    TechLogItemShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class TechLogItemModule { }
