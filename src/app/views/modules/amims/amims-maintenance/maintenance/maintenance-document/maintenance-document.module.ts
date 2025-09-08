import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaintenanceDocumentRoutingModule } from './maintenance-document-routing.module';
import { MaintenanceDocumentListComponent } from './maintenance-document-list/maintenance-document-list.component';
import { MaintenanceDocumentShareModule } from './maintenance-document-share/maintenance-document-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { DocumentModule } from 'src/app/views/lib/document/document.module';


@NgModule({
    declarations: [
        MaintenanceDocumentListComponent
    ],
    exports: [
        MaintenanceDocumentListComponent
    ],
    imports: [
        CommonModule,
        MaintenanceDocumentRoutingModule,
        MaintenanceDocumentShareModule,
        AntSimpleModule,
        TampilanModule,
        DocumentModule
    ]
})
export class MaintenanceDocumentModule { }
