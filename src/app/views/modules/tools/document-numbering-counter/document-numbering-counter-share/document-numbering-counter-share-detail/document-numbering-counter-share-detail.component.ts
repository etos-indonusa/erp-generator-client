import { Component, Input } from '@angular/core';
import type { ToolsDocumentNumberingCounterDto } from 'de-sdk-core';

@Component({
    selector: 'app-document-numbering-counter-share-detail',
    templateUrl: './document-numbering-counter-share-detail.component.html',
    styleUrl: './document-numbering-counter-share-detail.component.scss'
})
export class DocumentNumberingCounterShareDetailComponent {
    @Input('documentNumberingCounter') data: ToolsDocumentNumberingCounterDto = {
  idDocumentNumbering: '',
  idDocumentNumberingCounter: '',
  tahun: 0
};
}
