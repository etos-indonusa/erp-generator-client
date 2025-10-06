import { Component, Input } from '@angular/core';
import type { AmimsMaintenanceProgramDocumentDto } from 'de-sdk-core';

@Component({
    selector: 'app-maintenance-program-document-share-detail',
    templateUrl: './maintenance-program-document-share-detail.component.html',
    styleUrl: './maintenance-program-document-share-detail.component.scss'
})
export class MaintenanceProgramDocumentShareDetailComponent {
    @Input('maintenanceProgramDocument') data: AmimsMaintenanceProgramDocumentDto = {
  idMaintenanceDocument: '',
  idMaintenanceProgram: '',
  idMaintenanceProgramDocument: ''
};
}
