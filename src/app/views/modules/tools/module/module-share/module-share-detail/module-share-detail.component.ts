import { Component, Input } from '@angular/core';
import type { AclModuleDto } from 'src/sdk/core/models';

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
