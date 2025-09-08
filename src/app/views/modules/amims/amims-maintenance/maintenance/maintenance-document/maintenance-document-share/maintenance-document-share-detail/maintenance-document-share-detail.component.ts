import { Component, Input } from '@angular/core';
import type { AmimsMaintenanceDocumentDto } from 'de-sdk-core';

@Component({
    selector: 'app-maintenance-document-share-detail',
    templateUrl: './maintenance-document-share-detail.component.html',
    styleUrl: './maintenance-document-share-detail.component.scss'
})
export class MaintenanceDocumentShareDetailComponent {
    @Input('maintenanceDocument') data: AmimsMaintenanceDocumentDto = {
  idMaintenanceDocument: ''
};
}
