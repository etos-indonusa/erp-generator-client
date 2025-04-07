import { Injectable } from '@angular/core';
const TOKEN_KEY = 'token';
const USER_KEY = 'currentUser';
const CREDENTIAL_KEY = 'credential';
const PEMBUKUAN_TAHUN = 'tahun_pembukuan';

@Injectable({
    providedIn: 'root'
})
export class TokenService {

    private issuer = {
        login: 'http://127.0.0.1:8000/api/auth/login',
        register: 'http://127.0.0.1:8000/api/auth/register'
    }

    constructor() { }

    handleData(token: string) {
        localStorage.setItem(TOKEN_KEY, token);
    }
    saveTahunPembukuan(tahun: string) {
        localStorage.setItem(PEMBUKUAN_TAHUN, tahun);
    }
    getTahunPembukuan() {
        return localStorage.getItem(PEMBUKUAN_TAHUN);
    }
    getToken() {
        return localStorage.getItem(TOKEN_KEY);
    }

    // Verify the token
    isValidToken() {
        const token = this.getToken();

        if (token) {
            const payload = this.payload(token);
            if (payload) {
                return Object.values(this.issuer).indexOf(payload.iss) > -1 ? true : false;
            }
        } else {
            return false;
        }
        return false;
    }

    payload(token: string) {
        const jwtPayload = token.split('.')[1];
        return JSON.parse(atob(jwtPayload));
    }

    // User state based on valid token
    isLoggedIn() {
        return this.isValidToken();
    }

    // Remove token
    removeToken() {
        localStorage.removeItem(TOKEN_KEY);
    }
    signOut(): void {
        localStorage.clear();
    }

    public saveToken(token: string): void {
        localStorage.removeItem(TOKEN_KEY);
        localStorage.setItem(TOKEN_KEY, token);
    }


    public saveUser(user: any): void {
        localStorage.removeItem(USER_KEY);
        localStorage.setItem(USER_KEY, JSON.stringify(user));
    }

    public getUser(): any {
        const user = localStorage.getItem(USER_KEY);
        if (user) {
            return JSON.parse(user);
        }

        return {};
    }

    public saveCredential(data: any): void {
        localStorage.removeItem(CREDENTIAL_KEY);
        if (data.remember_me) {
            localStorage.setItem(CREDENTIAL_KEY, JSON.stringify(data));
        }
    }

    public getCredential(): any {
        const credential = localStorage.getItem(CREDENTIAL_KEY);
        if (credential) {
            return JSON.parse(credential);
        }
        return {};
    }
}
