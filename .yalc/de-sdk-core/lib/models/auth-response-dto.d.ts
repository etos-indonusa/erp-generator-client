import { AclUsers } from '../models/acl-users';
export interface AuthResponseDto {
    access_token: string;
    refresh_token: string;
    user: AclUsers;
}
