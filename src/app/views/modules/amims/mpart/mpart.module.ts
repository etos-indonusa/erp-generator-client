import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MpartRoutingModule } from './mpart-routing.module';
import { MpartListComponent } from './mpart-list/mpart-list.component';
import { MpartShareModule } from './mpart-share/mpart-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    MpartListComponent
  ],
  imports: [
    CommonModule,
    MpartRoutingModule,
    MpartShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class MpartModule { }
