import { Component, Input } from '@angular/core';
import type { AmimsMaintenanceMaterialDto } from 'de-sdk-core';

@Component({
    selector: 'app-maintenance-material-share-detail',
    templateUrl: './maintenance-material-share-detail.component.html',
    styleUrl: './maintenance-material-share-detail.component.scss'
})
export class MaintenanceMaterialShareDetailComponent {
    @Input('maintenanceMaterial') data: AmimsMaintenanceMaterialDto = {
  idMaintenanceMaterial: ''
};
}
