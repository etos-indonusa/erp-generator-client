import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaintenanceProgramRoutingModule } from './maintenance-program-routing.module';
import { MaintenanceProgramListComponent } from './maintenance-program-list/maintenance-program-list.component';
import { MaintenanceProgramShareModule } from './maintenance-program-share/maintenance-program-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
    declarations: [
        MaintenanceProgramListComponent
    ],
    imports: [
        CommonModule,
        MaintenanceProgramRoutingModule,
        MaintenanceProgramShareModule,
        AntSimpleModule,
        TampilanModule
    ]
})
export class MaintenanceProgramModule { }
