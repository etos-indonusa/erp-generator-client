import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DueListOutputRoutingModule } from './due-list-output-routing.module';
import { DueListOutputListComponent } from './due-list-output-list/due-list-output-list.component';
import { DueListOutputShareModule } from './due-list-output-share/due-list-output-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    DueListOutputListComponent
  ],
  imports: [
    CommonModule,
    DueListOutputRoutingModule,
    DueListOutputShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class DueListOutputModule { }
