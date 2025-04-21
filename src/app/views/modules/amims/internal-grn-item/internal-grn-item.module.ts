import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InternalGrnItemRoutingModule } from './internal-grn-item-routing.module';
import { InternalGrnItemListComponent } from './internal-grn-item-list/internal-grn-item-list.component';
import { InternalGrnItemShareModule } from './internal-grn-item-share/internal-grn-item-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    InternalGrnItemListComponent
  ],
  imports: [
    CommonModule,
    InternalGrnItemRoutingModule,
    InternalGrnItemShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class InternalGrnItemModule { }
