import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechDefectRoutingModule } from './tech-defect-routing.module';
import { TechDefectListComponent } from './tech-defect-list/tech-defect-list.component';
import { TechDefectShareModule } from './tech-defect-share/tech-defect-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    TechDefectListComponent
  ],
  imports: [
    CommonModule,
    TechDefectRoutingModule,
    TechDefectShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class TechDefectModule { }
