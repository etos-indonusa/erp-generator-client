import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaintenanceCodeFormIssuedShareAddComponent } from './maintenance-code-form-issued-share-add/maintenance-code-form-issued-share-add.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { MaintenanceCodeFormIssuedShareDetailComponent } from './maintenance-code-form-issued-share-detail/maintenance-code-form-issued-share-detail.component';
 
 
@NgModule({
    declarations: [
        MaintenanceCodeFormIssuedShareAddComponent, 
        MaintenanceCodeFormIssuedShareDetailComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AntSimpleModule,
        TampilanModule
    ]
}) 
export class MaintenanceCodeFormIssuedShareModule { }
