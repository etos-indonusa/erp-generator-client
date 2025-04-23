import { Component, Input } from '@angular/core';
import type { AmimsMaintenanceCodeReferenceDto } from 'de-sdk-core/lib/models';

@Component({
    selector: 'app-maintenance-code-reference-share-detail',
    templateUrl: './maintenance-code-reference-share-detail.component.html',
    styleUrl: './maintenance-code-reference-share-detail.component.scss'
})
export class MaintenanceCodeReferenceShareDetailComponent {
    @Input('maintenanceCodeReference') data: AmimsMaintenanceCodeReferenceDto = {
  idMaintenanceCodeReference: ''
};
}
