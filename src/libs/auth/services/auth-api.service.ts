
import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { map, tap } from 'rxjs/operators';
import { AuthPublicService } from 'de-sdk-core/services';
import { AuthProtectService } from 'de-sdk-core/services';

@Injectable({ providedIn: 'root' })
export class AuthApiService {
    constructor(
        private authPublicService: AuthPublicService,
        private authProtectService: AuthProtectService,
        private token: TokenService
    ) { }

    login(email: string, password: string) {
        return this.authPublicService.authControllerLogin({ body: { email, password } }).pipe(
            tap(res => {
                this.token.set(res.access_token);
                this.token.setRefresh(res.refresh_token);
            })
        );
    }

    getCurrentUser() {
        return this.authProtectService.authProtectedControllerGetMe().pipe(
            map((res: any) => ({
                user: res.user,       // atau res.data.user
                role: res.role,       // tergantung struktur JSON
                pegawai: res.pegawai,
            }))
        );
    }
    refreshToken(refreshToken: string) {
        return this.authPublicService.authControllerRefresh({
            body: {
                refreshToken: refreshToken
            }
        }).pipe(
            map((res: any) => ({ refreshToken }))
        );

        
    }


    logout() {
        this.token.clear();
    }
}
