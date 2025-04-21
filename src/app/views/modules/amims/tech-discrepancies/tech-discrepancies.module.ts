import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechDiscrepanciesRoutingModule } from './tech-discrepancies-routing.module';
import { TechDiscrepanciesListComponent } from './tech-discrepancies-list/tech-discrepancies-list.component';
import { TechDiscrepanciesShareModule } from './tech-discrepancies-share/tech-discrepancies-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    TechDiscrepanciesListComponent
  ],
  imports: [
    CommonModule,
    TechDiscrepanciesRoutingModule,
    TechDiscrepanciesShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class TechDiscrepanciesModule { }
