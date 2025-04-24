import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TdRoutingModule } from './td-routing.module';
import { TdListComponent } from './td-list/td-list.component';
import { TdShareModule } from './td-share/td-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    TdListComponent
  ],
  imports: [
    CommonModule,
    TdRoutingModule,
    TdShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class TdModule { }
