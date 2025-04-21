import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TdRefRoutingModule } from './td-ref-routing.module';
import { TdRefListComponent } from './td-ref-list/td-ref-list.component';
import { TdRefShareModule } from './td-ref-share/td-ref-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    TdRefListComponent
  ],
  imports: [
    CommonModule,
    TdRefRoutingModule,
    TdRefShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class TdRefModule { }
