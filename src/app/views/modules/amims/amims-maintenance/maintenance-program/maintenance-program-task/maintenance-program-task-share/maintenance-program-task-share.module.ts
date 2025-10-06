import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaintenanceProgramTaskShareAddComponent } from './maintenance-program-task-share-add/maintenance-program-task-share-add.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { MaintenanceProgramTaskShareDetailComponent } from './maintenance-program-task-share-detail/maintenance-program-task-share-detail.component';
 
 
@NgModule({
    declarations: [
        MaintenanceProgramTaskShareAddComponent, 
        MaintenanceProgramTaskShareDetailComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AntSimpleModule,
        TampilanModule
    ]
}) 
export class MaintenanceProgramTaskShareModule { }
