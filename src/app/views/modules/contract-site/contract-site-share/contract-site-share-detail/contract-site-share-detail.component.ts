import { Component, Input } from '@angular/core';
import type { ContractSiteDto } from 'src/sdk/core/models';

@Component({
    selector: 'app-contract-site-share-detail',
    templateUrl: './contract-site-share-detail.component.html',
    styleUrl: './contract-site-share-detail.component.scss'
})
export class ContractSiteShareDetailComponent {
    @Input('contractSite') data: ContractSiteDto = {
  idClientSite: '',
  idContract: '',
  idContractSite: ''
};
}
