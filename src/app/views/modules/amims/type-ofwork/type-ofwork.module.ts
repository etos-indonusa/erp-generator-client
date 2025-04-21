import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypeOfworkRoutingModule } from './type-ofwork-routing.module';
import { TypeOfworkListComponent } from './type-ofwork-list/type-ofwork-list.component';
import { TypeOfworkShareModule } from './type-ofwork-share/type-ofwork-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    TypeOfworkListComponent
  ],
  imports: [
    CommonModule,
    TypeOfworkRoutingModule,
    TypeOfworkShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class TypeOfworkModule { }
