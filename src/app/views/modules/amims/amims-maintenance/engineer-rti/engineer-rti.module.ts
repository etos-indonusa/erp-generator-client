import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EngineerRtiRoutingModule } from './engineer-rti-routing.module';
import { EngineerRtiListComponent } from './engineer-rti-list/engineer-rti-list.component';
import { EngineerRtiShareModule } from './engineer-rti-share/engineer-rti-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    EngineerRtiListComponent
  ],
  imports: [
    CommonModule,
    EngineerRtiRoutingModule,
    EngineerRtiShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class EngineerRtiModule { }
