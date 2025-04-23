import { Component, Input } from '@angular/core';
import type { ToolsCustomFieldDto } from 'de-sdk-core/lib/models';

@Component({
    selector: 'app-custom-field-share-detail',
    templateUrl: './custom-field-share-detail.component.html',
    styleUrl: './custom-field-share-detail.component.scss'
})
export class CustomFieldShareDetailComponent {
    @Input('customField') data: ToolsCustomFieldDto = {
  idCustomField: '',
  kodeField: '',
  labelField: '',
  tipeField: ''
};
}
