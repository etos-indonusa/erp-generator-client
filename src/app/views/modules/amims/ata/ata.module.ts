import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtaRoutingModule } from './ata-routing.module';
import { AtaListComponent } from './ata-list/ata-list.component';
import { AtaShareModule } from './ata-share/ata-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    AtaListComponent
  ],
  imports: [
    CommonModule,
    AtaRoutingModule,
    AtaShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class AtaModule { }
