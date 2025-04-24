import { Component, Input } from '@angular/core';
import type { AmimsMaintenanceCodeFormIssuedDto } from 'de-sdk-core';

@Component({
    selector: 'app-maintenance-code-form-issued-share-detail',
    templateUrl: './maintenance-code-form-issued-share-detail.component.html',
    styleUrl: './maintenance-code-form-issued-share-detail.component.scss'
})
export class MaintenanceCodeFormIssuedShareDetailComponent {
    @Input('maintenanceCodeFormIssued') data: AmimsMaintenanceCodeFormIssuedDto = {
  idMaintenanceCodeFormIssued: ''
};
}
