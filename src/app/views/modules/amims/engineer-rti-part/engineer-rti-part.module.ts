import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EngineerRtiPartRoutingModule } from './engineer-rti-part-routing.module';
import { EngineerRtiPartListComponent } from './engineer-rti-part-list/engineer-rti-part-list.component';
import { EngineerRtiPartShareModule } from './engineer-rti-part-share/engineer-rti-part-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    EngineerRtiPartListComponent
  ],
  imports: [
    CommonModule,
    EngineerRtiPartRoutingModule,
    EngineerRtiPartShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class EngineerRtiPartModule { }
