import { Component, Input } from '@angular/core';
import type { AmimsAtaDto } from 'de-sdk-core/models';

@Component({
    selector: 'app-ata-share-detail',
    templateUrl: './ata-share-detail.component.html',
    styleUrl: './ata-share-detail.component.scss'
})
export class AtaShareDetailComponent {
    @Input('ata') data: AmimsAtaDto = {
  idAta: ''
};
}
