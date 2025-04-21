import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaintenanceCodeReferenceShareAddComponent } from './maintenance-code-reference-share-add/maintenance-code-reference-share-add.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { MaintenanceCodeReferenceShareDetailComponent } from './maintenance-code-reference-share-detail/maintenance-code-reference-share-detail.component';
 
 
@NgModule({
    declarations: [
        MaintenanceCodeReferenceShareAddComponent, 
        MaintenanceCodeReferenceShareDetailComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AntSimpleModule,
        TampilanModule
    ]
}) 
export class MaintenanceCodeReferenceShareModule { }
