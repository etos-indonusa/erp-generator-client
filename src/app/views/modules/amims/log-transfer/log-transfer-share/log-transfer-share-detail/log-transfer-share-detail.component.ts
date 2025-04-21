import { Component, Input } from '@angular/core';
import type { AmimsLogTransferDto } from 'src/sdk/core/models';

@Component({
    selector: 'app-log-transfer-share-detail',
    templateUrl: './log-transfer-share-detail.component.html',
    styleUrl: './log-transfer-share-detail.component.scss'
})
export class LogTransferShareDetailComponent {
    @Input('logTransfer') data: AmimsLogTransferDto = {
  idLogTransfer: ''
};
}
