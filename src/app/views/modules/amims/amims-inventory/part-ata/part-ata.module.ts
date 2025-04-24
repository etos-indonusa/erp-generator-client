import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartAtaRoutingModule } from './part-ata-routing.module';
import { PartAtaListComponent } from './part-ata-list/part-ata-list.component';
import { PartAtaShareModule } from './part-ata-share/part-ata-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    PartAtaListComponent
  ],
  imports: [
    CommonModule,
    PartAtaRoutingModule,
    PartAtaShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class PartAtaModule { }
