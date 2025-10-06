import { Component, Input } from '@angular/core';
import type { AmimsMaintenanceProgramTaskDto } from 'de-sdk-core';

@Component({
    selector: 'app-maintenance-program-task-share-detail',
    templateUrl: './maintenance-program-task-share-detail.component.html',
    styleUrl: './maintenance-program-task-share-detail.component.scss'
})
export class MaintenanceProgramTaskShareDetailComponent {
    @Input('maintenanceProgramTask') data: AmimsMaintenanceProgramTaskDto = {
  idMaintenanceProgram: '',
  idMaintenanceProgramTask: ''
};
}
