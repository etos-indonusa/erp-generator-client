import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserGroupRoutingModule } from './user-group-routing.module';
import { UserGroupListComponent } from './user-group-list/user-group-list.component';
import { UserGroupShareModule } from './user-group-share/user-group-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    UserGroupListComponent
  ],
  imports: [
    CommonModule,
    UserGroupRoutingModule,
    UserGroupShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class UserGroupModule { }
