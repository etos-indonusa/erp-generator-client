import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActypeRoutingModule } from './actype-routing.module';
import { ActypeListComponent } from './actype-list/actype-list.component';
import { ActypeShareModule } from './actype-share/actype-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    ActypeListComponent
  ],
  imports: [
    CommonModule,
    ActypeRoutingModule,
    ActypeShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class ActypeModule { }
