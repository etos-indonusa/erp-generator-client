import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartActypeRoutingModule } from './part-actype-routing.module';
import { PartActypeListComponent } from './part-actype-list/part-actype-list.component';
import { PartActypeShareModule } from './part-actype-share/part-actype-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    PartActypeListComponent
  ],
  imports: [
    CommonModule,
    PartActypeRoutingModule,
    PartActypeShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class PartActypeModule { }
