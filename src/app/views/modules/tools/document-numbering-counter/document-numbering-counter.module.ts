import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentNumberingCounterRoutingModule } from './document-numbering-counter-routing.module';
import { DocumentNumberingCounterListComponent } from './document-numbering-counter-list/document-numbering-counter-list.component';
import { DocumentNumberingCounterShareModule } from './document-numbering-counter-share/document-numbering-counter-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    DocumentNumberingCounterListComponent
  ],
  imports: [
    CommonModule,
    DocumentNumberingCounterRoutingModule,
    DocumentNumberingCounterShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class DocumentNumberingCounterModule { }
