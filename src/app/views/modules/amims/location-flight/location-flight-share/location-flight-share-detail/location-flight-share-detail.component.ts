import { Component, Input } from '@angular/core';
import type { AmimsLocationFlightDto } from 'src/sdk/core/models';

@Component({
    selector: 'app-location-flight-share-detail',
    templateUrl: './location-flight-share-detail.component.html',
    styleUrl: './location-flight-share-detail.component.scss'
})
export class LocationFlightShareDetailComponent {
    @Input('locationFlight') data: AmimsLocationFlightDto = {
  idLocationFlight: ''
};
}
