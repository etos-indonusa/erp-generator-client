import { Component, Input } from '@angular/core';
import type { ContractDto } from 'src/sdk/core/models';

@Component({
    selector: 'app-contract-share-detail',
    templateUrl: './contract-share-detail.component.html',
    styleUrl: './contract-share-detail.component.scss'
})
export class ContractShareDetailComponent {
    @Input('contract') data: ContractDto = {
  idClient: '',
  idContract: ''
};
}
