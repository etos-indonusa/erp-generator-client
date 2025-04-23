import { Component, Input } from '@angular/core';
import type { AmimsSiteDto } from 'de-sdk-core/lib/models';

@Component({
    selector: 'app-site-share-detail',
    templateUrl: './site-share-detail.component.html',
    styleUrl: './site-share-detail.component.scss'
})
export class SiteShareDetailComponent {
    @Input('site') data: AmimsSiteDto = {
  idSite: ''
};
}
