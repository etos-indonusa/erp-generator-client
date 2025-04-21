import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EngineerRtiIdentifyRoutingModule } from './engineer-rti-identify-routing.module';
import { EngineerRtiIdentifyListComponent } from './engineer-rti-identify-list/engineer-rti-identify-list.component';
import { EngineerRtiIdentifyShareModule } from './engineer-rti-identify-share/engineer-rti-identify-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    EngineerRtiIdentifyListComponent
  ],
  imports: [
    CommonModule,
    EngineerRtiIdentifyRoutingModule,
    EngineerRtiIdentifyShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class EngineerRtiIdentifyModule { }
