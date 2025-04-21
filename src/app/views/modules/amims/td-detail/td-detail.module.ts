import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TdDetailRoutingModule } from './td-detail-routing.module';
import { TdDetailListComponent } from './td-detail-list/td-detail-list.component';
import { TdDetailShareModule } from './td-detail-share/td-detail-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    TdDetailListComponent
  ],
  imports: [
    CommonModule,
    TdDetailRoutingModule,
    TdDetailShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class TdDetailModule { }
