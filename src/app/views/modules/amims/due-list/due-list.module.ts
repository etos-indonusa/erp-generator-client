import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DueListRoutingModule } from './due-list-routing.module';
import { DueListListComponent } from './due-list-list/due-list-list.component';
import { DueListShareModule } from './due-list-share/due-list-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    DueListListComponent
  ],
  imports: [
    CommonModule,
    DueListRoutingModule,
    DueListShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class DueListModule { }
