import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaintenanceProgramTaskRoutingModule } from './maintenance-program-task-routing.module';
import { MaintenanceProgramTaskListComponent } from './maintenance-program-task-list/maintenance-program-task-list.component';
import { MaintenanceProgramTaskShareModule } from './maintenance-program-task-share/maintenance-program-task-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
    declarations: [
        MaintenanceProgramTaskListComponent
    ],
    exports: [
        MaintenanceProgramTaskListComponent
    ],
    imports: [
        CommonModule,
        MaintenanceProgramTaskRoutingModule,
        MaintenanceProgramTaskShareModule,
        AntSimpleModule,
        TampilanModule
    ]
})
export class MaintenanceProgramTaskModule { }
