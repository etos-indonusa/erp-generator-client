import { Component, Input } from '@angular/core';
import type { AclModuleDto } from 'de-sdk-core/lib/models';

@Component({
    selector: 'app-module-share-detail',
    templateUrl: './module-share-detail.component.html',
    styleUrl: './module-share-detail.component.scss'
})
export class ModuleShareDetailComponent {
    @Input('module') data: AclModuleDto = {
  idModule: ''
};
}
