import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrencyRoutingModule } from './currency-routing.module';
import { CurrencyListComponent } from './currency-list/currency-list.component';
import { CurrencyShareModule } from './currency-share/currency-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    CurrencyListComponent
  ],
  imports: [
    CommonModule,
    CurrencyRoutingModule,
    CurrencyShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class CurrencyModule { }
