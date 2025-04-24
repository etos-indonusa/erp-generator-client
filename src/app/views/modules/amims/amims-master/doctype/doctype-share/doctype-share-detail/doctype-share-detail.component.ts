import { Component, Input } from '@angular/core';
import type { AmimsDoctypeDto } from 'de-sdk-core';

@Component({
    selector: 'app-doctype-share-detail',
    templateUrl: './doctype-share-detail.component.html',
    styleUrl: './doctype-share-detail.component.scss'
})
export class DoctypeShareDetailComponent {
    @Input('doctype') data: AmimsDoctypeDto = {
  idDoctype: ''
};
}
