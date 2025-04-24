import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartConditionRoutingModule } from './part-condition-routing.module';
import { PartConditionListComponent } from './part-condition-list/part-condition-list.component';
import { PartConditionShareModule } from './part-condition-share/part-condition-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    PartConditionListComponent
  ],
  imports: [
    CommonModule,
    PartConditionRoutingModule,
    PartConditionShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class PartConditionModule { }
