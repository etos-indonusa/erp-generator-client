import { Component, Input } from '@angular/core';
import type { AmimsLibUploadDto } from 'de-sdk-core/lib/models';

@Component({
    selector: 'app-lib-upload-share-detail',
    templateUrl: './lib-upload-share-detail.component.html',
    styleUrl: './lib-upload-share-detail.component.scss'
})
export class LibUploadShareDetailComponent {
    @Input('libUpload') data: AmimsLibUploadDto = {
  idLibUpload: ''
};
}
