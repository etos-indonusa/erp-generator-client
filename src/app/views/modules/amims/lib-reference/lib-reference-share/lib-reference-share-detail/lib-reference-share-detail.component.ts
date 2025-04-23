import { Component, Input } from '@angular/core';
import type { AmimsLibReferenceDto } from 'de-sdk-core/lib/models';

@Component({
    selector: 'app-lib-reference-share-detail',
    templateUrl: './lib-reference-share-detail.component.html',
    styleUrl: './lib-reference-share-detail.component.scss'
})
export class LibReferenceShareDetailComponent {
    @Input('libReference') data: AmimsLibReferenceDto = {
  idLibReference: ''
};
}
