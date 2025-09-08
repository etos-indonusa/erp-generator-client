import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaintenanceDocumentShareAddComponent } from './maintenance-document-share-add/maintenance-document-share-add.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { MaintenanceDocumentShareDetailComponent } from './maintenance-document-share-detail/maintenance-document-share-detail.component';
import { DocumentModule } from 'src/app/views/lib/document/document.module';
 
 
@NgModule({
    declarations: [
        MaintenanceDocumentShareAddComponent, 
        MaintenanceDocumentShareDetailComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AntSimpleModule,
        TampilanModule,
        DocumentModule
    ]
}) 
export class MaintenanceDocumentShareModule { }
