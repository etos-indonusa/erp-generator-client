import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TdDetailAcRoutingModule } from './td-detail-ac-routing.module';
import { TdDetailAcListComponent } from './td-detail-ac-list/td-detail-ac-list.component';
import { TdDetailAcShareModule } from './td-detail-ac-share/td-detail-ac-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    TdDetailAcListComponent
  ],
  imports: [
    CommonModule,
    TdDetailAcRoutingModule,
    TdDetailAcShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class TdDetailAcModule { }
