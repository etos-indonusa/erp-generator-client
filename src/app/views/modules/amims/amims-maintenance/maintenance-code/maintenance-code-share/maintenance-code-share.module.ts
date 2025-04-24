import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaintenanceCodeShareAddComponent } from './maintenance-code-share-add/maintenance-code-share-add.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { MaintenanceCodeShareDetailComponent } from './maintenance-code-share-detail/maintenance-code-share-detail.component';
 
 
@NgModule({
    declarations: [
        MaintenanceCodeShareAddComponent, 
        MaintenanceCodeShareDetailComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AntSimpleModule,
        TampilanModule
    ]
}) 
export class MaintenanceCodeShareModule { }
