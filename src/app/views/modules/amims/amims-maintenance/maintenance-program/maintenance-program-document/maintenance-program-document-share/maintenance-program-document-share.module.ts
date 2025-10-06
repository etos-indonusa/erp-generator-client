import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaintenanceProgramDocumentShareAddComponent } from './maintenance-program-document-share-add/maintenance-program-document-share-add.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { MaintenanceProgramDocumentShareDetailComponent } from './maintenance-program-document-share-detail/maintenance-program-document-share-detail.component';
 
 
@NgModule({
    declarations: [
        MaintenanceProgramDocumentShareAddComponent, 
        MaintenanceProgramDocumentShareDetailComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AntSimpleModule,
        TampilanModule
    ]
}) 
export class MaintenanceProgramDocumentShareModule { }
