import { Component, Input } from '@angular/core';
import type { AmimsWarrantyDto } from 'de-sdk-core/lib/models';

@Component({
    selector: 'app-warranty-share-detail',
    templateUrl: './warranty-share-detail.component.html',
    styleUrl: './warranty-share-detail.component.scss'
})
export class WarrantyShareDetailComponent {
    @Input('warranty') data: AmimsWarrantyDto = {
  idWarranty: ''
};
}
