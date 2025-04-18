import { Component, Input } from '@angular/core';
import type { ToolsDocumentNumberingDto } from 'src/sdk/core/models';

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
