import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartLogRoutingModule } from './part-log-routing.module';
import { PartLogListComponent } from './part-log-list/part-log-list.component';
import { PartLogShareModule } from './part-log-share/part-log-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    PartLogListComponent
  ],
  imports: [
    CommonModule,
    PartLogRoutingModule,
    PartLogShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class PartLogModule { }
