import { Component, Input } from '@angular/core';
import type { ClientDto } from 'src/sdk/core/models';

@Component({
    selector: 'app-client-share-detail',
    templateUrl: './client-share-detail.component.html',
    styleUrl: './client-share-detail.component.scss'
})
export class ClientShareDetailComponent {
    @Input('client') data: ClientDto = {
  idClient: '',
  namaResmi: ''
};
}
