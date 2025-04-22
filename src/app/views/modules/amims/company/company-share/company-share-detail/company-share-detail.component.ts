import { Component, Input } from '@angular/core';
import type { AmimsCompanyDto } from 'de-sdk-core/models';

@Component({
    selector: 'app-company-share-detail',
    templateUrl: './company-share-detail.component.html',
    styleUrl: './company-share-detail.component.scss'
})
export class CompanyShareDetailComponent {
    @Input('company') data: AmimsCompanyDto = {
  idCompany: ''
};
}
