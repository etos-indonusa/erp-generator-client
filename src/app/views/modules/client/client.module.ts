import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientShareModule } from './client-share/client-share.module';
import { AntSimpleModule } from '../../../shared/ant-simple.module';
import { TampilanModule } from '../../../shared/tampilan.module';


@NgModule({
  declarations: [
    ClientListComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    ClientShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class ClientModule { }
