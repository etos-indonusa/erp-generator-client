import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreDestroyRoutingModule } from './store-destroy-routing.module';
import { StoreDestroyListComponent } from './store-destroy-list/store-destroy-list.component';
import { StoreDestroyShareModule } from './store-destroy-share/store-destroy-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    StoreDestroyListComponent
  ],
  imports: [
    CommonModule,
    StoreDestroyRoutingModule,
    StoreDestroyShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class StoreDestroyModule { }
