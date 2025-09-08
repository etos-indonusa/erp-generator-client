import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaintenanceMaterialShareAddComponent } from './maintenance-material-share-add/maintenance-material-share-add.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { MaintenanceMaterialShareDetailComponent } from './maintenance-material-share-detail/maintenance-material-share-detail.component';
 
 
@NgModule({
    declarations: [
        MaintenanceMaterialShareAddComponent, 
        MaintenanceMaterialShareDetailComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AntSimpleModule,
        TampilanModule
    ]
}) 
export class MaintenanceMaterialShareModule { }
