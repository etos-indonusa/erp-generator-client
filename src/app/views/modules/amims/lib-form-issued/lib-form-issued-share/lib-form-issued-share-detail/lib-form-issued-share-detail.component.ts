import { Component, Input } from '@angular/core';
import type { AmimsLibFormIssuedDto } from 'de-sdk-core/models';

@Component({
    selector: 'app-lib-form-issued-share-detail',
    templateUrl: './lib-form-issued-share-detail.component.html',
    styleUrl: './lib-form-issued-share-detail.component.scss'
})
export class LibFormIssuedShareDetailComponent {
    @Input('libFormIssued') data: AmimsLibFormIssuedDto = {
  idLibFormIssued: ''
};
}
