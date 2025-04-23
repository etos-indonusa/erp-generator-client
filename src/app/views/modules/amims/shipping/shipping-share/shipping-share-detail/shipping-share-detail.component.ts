import { Component, Input } from '@angular/core';
import type { AmimsShippingDto } from 'de-sdk-core';

@Component({
    selector: 'app-shipping-share-detail',
    templateUrl: './shipping-share-detail.component.html',
    styleUrl: './shipping-share-detail.component.scss'
})
export class ShippingShareDetailComponent {
    @Input('shipping') data: AmimsShippingDto = {
  idShipping: ''
};
}
