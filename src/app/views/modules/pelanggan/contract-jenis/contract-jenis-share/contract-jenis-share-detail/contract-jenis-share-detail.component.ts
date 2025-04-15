import { Component, Input } from '@angular/core';
import type { PelangganContractJenisDto } from 'src/sdk/core/models';

@Component({
    selector: 'app-contract-jenis-share-detail',
    templateUrl: './contract-jenis-share-detail.component.html',
    styleUrl: './contract-jenis-share-detail.component.scss'
})
export class ContractJenisShareDetailComponent {
    @Input('contractJenis') data: PelangganContractJenisDto = {
  idContractJenis: '',
  namaContractJenis: ''
};
}
