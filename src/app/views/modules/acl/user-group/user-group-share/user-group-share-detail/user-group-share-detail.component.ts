import { Component, Input } from '@angular/core';
import type { AclUserGroupDto } from 'src/sdk/core/models';

@Component({
    selector: 'app-user-group-share-detail',
    templateUrl: './user-group-share-detail.component.html',
    styleUrl: './user-group-share-detail.component.scss'
})
export class UserGroupShareDetailComponent {
    @Input('userGroup') data: AclUserGroupDto = {
  idUserGroup: '',
  namaUserGroup: '',
  status: ''
};
}
