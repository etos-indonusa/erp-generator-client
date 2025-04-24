import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WarrantyRoutingModule } from './warranty-routing.module';
import { WarrantyListComponent } from './warranty-list/warranty-list.component';
import { WarrantyShareModule } from './warranty-share/warranty-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    WarrantyListComponent
  ],
  imports: [
    CommonModule,
    WarrantyRoutingModule,
    WarrantyShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class WarrantyModule { }
