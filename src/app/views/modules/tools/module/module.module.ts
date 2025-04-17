import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleRoutingModule } from './module-routing.module';
import { ModuleListComponent } from './module-list/module-list.component';
import { ModuleShareModule } from './module-share/module-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    ModuleListComponent
  ],
  imports: [
    CommonModule,
    ModuleRoutingModule,
    ModuleShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class ModuleModule { }
