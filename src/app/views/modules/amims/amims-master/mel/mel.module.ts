import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MelRoutingModule } from './mel-routing.module';
import { MelListComponent } from './mel-list/mel-list.component';
import { MelShareModule } from './mel-share/mel-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    MelListComponent
  ],
  imports: [
    CommonModule,
    MelRoutingModule,
    MelShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class MelModule { }
