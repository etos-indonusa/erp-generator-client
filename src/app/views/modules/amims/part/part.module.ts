import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartRoutingModule } from './part-routing.module';
import { PartListComponent } from './part-list/part-list.component';
import { PartShareModule } from './part-share/part-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    PartListComponent
  ],
  imports: [
    CommonModule,
    PartRoutingModule,
    PartShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class PartModule { }
