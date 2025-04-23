import { Component, Input } from '@angular/core';
import type { AmimsMaintenanceCodeDto } from 'de-sdk-core/lib/models';

@Component({
    selector: 'app-maintenance-code-share-detail',
    templateUrl: './maintenance-code-share-detail.component.html',
    styleUrl: './maintenance-code-share-detail.component.scss'
})
export class MaintenanceCodeShareDetailComponent {
    @Input('maintenanceCode') data: AmimsMaintenanceCodeDto = {
  idMaintenanceCode: ''
};
}
