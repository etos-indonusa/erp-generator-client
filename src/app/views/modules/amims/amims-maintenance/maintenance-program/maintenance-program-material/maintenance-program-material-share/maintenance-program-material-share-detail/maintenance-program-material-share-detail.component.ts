import { Component, Input } from '@angular/core';
import type { AmimsMaintenanceProgramMaterialDto } from 'de-sdk-core';

@Component({
    selector: 'app-maintenance-program-material-share-detail',
    templateUrl: './maintenance-program-material-share-detail.component.html',
    styleUrl: './maintenance-program-material-share-detail.component.scss'
})
export class MaintenanceProgramMaterialShareDetailComponent {
    @Input('maintenanceProgramMaterial') data: AmimsMaintenanceProgramMaterialDto = {
  idMaintenanceProgram: '',
  idMaintenanceProgramMaterial: ''
};
}
