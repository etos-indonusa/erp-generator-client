import { Component, Input } from '@angular/core';
import type { ToolsCustomFieldDto } from 'src/sdk/core/models';

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
