import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VDueListOutputRoutingModule } from './v-due-list-output-routing.module';
import { VDueListOutputListComponent } from './v-due-list-output-list/v-due-list-output-list.component';
import { VDueListOutputShareModule } from './v-due-list-output-share/v-due-list-output-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    VDueListOutputListComponent
  ],
  imports: [
    CommonModule,
    VDueListOutputRoutingModule,
    VDueListOutputShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class VDueListOutputModule { }
