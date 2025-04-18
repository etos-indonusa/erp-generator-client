import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentNumberingShareAddComponent } from './document-numbering-share-add/document-numbering-share-add.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { DocumentNumberingShareDetailComponent } from './document-numbering-share-detail/document-numbering-share-detail.component';
 
 
@NgModule({
    declarations: [
        DocumentNumberingShareAddComponent, 
        DocumentNumberingShareDetailComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AntSimpleModule,
        TampilanModule
    ]
}) 
export class DocumentNumberingShareModule { }
