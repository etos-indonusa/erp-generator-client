import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EngineerPmtrRoutingModule } from './engineer-pmtr-routing.module';
import { EngineerPmtrListComponent } from './engineer-pmtr-list/engineer-pmtr-list.component';
import { EngineerPmtrShareModule } from './engineer-pmtr-share/engineer-pmtr-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    EngineerPmtrListComponent
  ],
  imports: [
    CommonModule,
    EngineerPmtrRoutingModule,
    EngineerPmtrShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class EngineerPmtrModule { }
