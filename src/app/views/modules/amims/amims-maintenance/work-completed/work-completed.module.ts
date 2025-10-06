import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkCompletedRoutingModule } from './work-completed-routing.module';
import { WorkCompletedListComponent } from './work-completed-list/work-completed-list.component';
import { WorkCompletedShareModule } from './work-completed-share/work-completed-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    WorkCompletedListComponent
  ],
  imports: [
    CommonModule,
    WorkCompletedRoutingModule,
    WorkCompletedShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class WorkCompletedModule { }
