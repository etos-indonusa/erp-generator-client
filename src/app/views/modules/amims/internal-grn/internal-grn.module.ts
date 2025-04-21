import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InternalGrnRoutingModule } from './internal-grn-routing.module';
import { InternalGrnListComponent } from './internal-grn-list/internal-grn-list.component';
import { InternalGrnShareModule } from './internal-grn-share/internal-grn-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    InternalGrnListComponent
  ],
  imports: [
    CommonModule,
    InternalGrnRoutingModule,
    InternalGrnShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class InternalGrnModule { }
