import { Component, Input } from '@angular/core';
import type { ToolsDocumentNumberingDto } from 'de-sdk-core';

@Component({
    selector: 'app-document-numbering-share-detail',
    templateUrl: './document-numbering-share-detail.component.html',
    styleUrl: './document-numbering-share-detail.component.scss'
})
export class DocumentNumberingShareDetailComponent {
    @Input('documentNumbering') data: ToolsDocumentNumberingDto = {
  forModule: '',
  formatNomor: '',
  idDocumentNumbering: '',
  targetColumn: '',
  targetTable: ''
};
}
