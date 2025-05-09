import { Component, Input } from '@angular/core';
import type { AmimsMelDto } from 'de-sdk-core';

@Component({
    selector: 'app-mel-share-detail',
    templateUrl: './mel-share-detail.component.html',
    styleUrl: './mel-share-detail.component.scss'
})
export class MelShareDetailComponent {
    @Input('mel') data: AmimsMelDto = {
  idMel: ''
};
}
