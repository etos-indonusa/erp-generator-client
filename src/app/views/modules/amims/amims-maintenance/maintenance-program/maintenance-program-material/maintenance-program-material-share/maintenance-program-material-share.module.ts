import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaintenanceProgramMaterialShareAddComponent } from './maintenance-program-material-share-add/maintenance-program-material-share-add.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { MaintenanceProgramMaterialShareDetailComponent } from './maintenance-program-material-share-detail/maintenance-program-material-share-detail.component';
 
 
@NgModule({
    declarations: [
        MaintenanceProgramMaterialShareAddComponent, 
        MaintenanceProgramMaterialShareDetailComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AntSimpleModule,
        TampilanModule
    ]
}) 
export class MaintenanceProgramMaterialShareModule { }
