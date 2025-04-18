import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentNumberingCounterShareAddComponent } from './document-numbering-counter-share-add/document-numbering-counter-share-add.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { DocumentNumberingCounterShareDetailComponent } from './document-numbering-counter-share-detail/document-numbering-counter-share-detail.component';
 
 
@NgModule({
    declarations: [
        DocumentNumberingCounterShareAddComponent, 
        DocumentNumberingCounterShareDetailComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AntSimpleModule,
        TampilanModule
    ]
}) 
export class DocumentNumberingCounterShareModule { }
