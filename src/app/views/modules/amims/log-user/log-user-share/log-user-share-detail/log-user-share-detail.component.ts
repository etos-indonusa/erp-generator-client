import { Component, Input } from '@angular/core';
import type { AmimsLogUserDto } from 'de-sdk-core/lib/models';

@Component({
    selector: 'app-log-user-share-detail',
    templateUrl: './log-user-share-detail.component.html',
    styleUrl: './log-user-share-detail.component.scss'
})
export class LogUserShareDetailComponent {
    @Input('logUser') data: AmimsLogUserDto = {
  idLogUser: ''
};
}
