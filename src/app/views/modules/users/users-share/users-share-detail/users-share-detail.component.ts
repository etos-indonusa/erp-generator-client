import { Component, Input } from '@angular/core';
import type { UsersDto } from 'src/sdk/core/models';

@Component({
    selector: 'app-users-share-detail',
    templateUrl: './users-share-detail.component.html',
    styleUrl: './users-share-detail.component.scss'
})
export class UsersShareDetailComponent {
    @Input('users') data: UsersDto = {
  email: '',
  idUsers: '',
  password: ''
};
}
