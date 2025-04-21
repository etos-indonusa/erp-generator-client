import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TdTypeRoutingModule } from './td-type-routing.module';
import { TdTypeListComponent } from './td-type-list/td-type-list.component';
import { TdTypeShareModule } from './td-type-share/td-type-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    TdTypeListComponent
  ],
  imports: [
    CommonModule,
    TdTypeRoutingModule,
    TdTypeShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class TdTypeModule { }
