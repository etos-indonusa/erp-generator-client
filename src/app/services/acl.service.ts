import { Injectable } from '@angular/core';
import { mockAcl, Permission } from '../mock/acl.mock';

@Injectable({ providedIn: 'root' })
export class AclService {
    private groupId = mockAcl.id_group;
    private permissions: { [key: string]: Permission } = mockAcl.permissions;

    can(module: string, action: keyof Permission): boolean {
        return true;
        if (this.groupId === 'admin') return true;
        return this.permissions?.[module]?.[action] === true;
    }

    getGroup() {
        return this.groupId;
    }

    getAllPermissions() {
        return this.permissions;
    }
}
