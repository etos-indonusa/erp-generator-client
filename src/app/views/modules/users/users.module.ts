import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersShareModule } from './users-share/users-share.module';
import { AntSimpleModule } from '../../../shared/ant-simple.module';
import { TampilanModule } from '../../../shared/tampilan.module';


@NgModule({
  declarations: [
    UsersListComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    UsersShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class UsersModule { }
