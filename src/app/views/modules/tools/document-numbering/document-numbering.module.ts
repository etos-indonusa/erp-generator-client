import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentNumberingRoutingModule } from './document-numbering-routing.module';
import { DocumentNumberingListComponent } from './document-numbering-list/document-numbering-list.component';
import { DocumentNumberingShareModule } from './document-numbering-share/document-numbering-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    DocumentNumberingListComponent
  ],
  imports: [
    CommonModule,
    DocumentNumberingRoutingModule,
    DocumentNumberingShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class DocumentNumberingModule { }
