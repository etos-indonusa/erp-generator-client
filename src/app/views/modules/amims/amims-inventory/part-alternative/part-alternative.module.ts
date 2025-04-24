import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartAlternativeRoutingModule } from './part-alternative-routing.module';
import { PartAlternativeListComponent } from './part-alternative-list/part-alternative-list.component';
import { PartAlternativeShareModule } from './part-alternative-share/part-alternative-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    PartAlternativeListComponent
  ],
  imports: [
    CommonModule,
    PartAlternativeRoutingModule,
    PartAlternativeShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class PartAlternativeModule { }
