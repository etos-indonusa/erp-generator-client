import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { of, interval } from 'rxjs';
import { switchMap, map, catchError, tap, withLatestFrom, filter, startWith } from 'rxjs/operators';

import { AuthApiService } from '../services/auth-api.service';
import {
    login, loginSuccess, loginFailure,
    loadCurrentUser, loadCurrentUserSuccess, loadCurrentUserFailure,
    logout,
    refreshToken, refreshTokenSuccess, refreshTokenFailure
} from './auth.actions';
import { getAuthToken, getRefreshToken } from './auth.selectors';

@Injectable()
export class AuthEffects {
    constructor(
        private actions$: Actions,
        private store: Store,
        private authApi: AuthApiService,
        private router: Router
    ) { }

    ngrxOnInitEffects(): Action {
        const token = localStorage.getItem('access_token');
        
        if (token) {
            return loadCurrentUser(); // langsung dispatch saat effect init
        } 
        return { type: '[Auth] No Token Detected' }; // dummy fallback
    }

    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(login),
            switchMap(({ email, password }) =>
                this.authApi.login(email, password).pipe(
                    map(res =>
                        loginSuccess({
                            token: res.access_token,
                            refresh_token: res.refresh_token
                        })
                    ),
                    catchError(error => of(loginFailure({ error })))
                )
            )
        )
    );

    redirectAfterLogin$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(loadCurrentUserSuccess),
                tap(() => {
                    // this.router.navigate(['/dashboard']); // atau path default-mu
                    const redirectUrl = localStorage.getItem('redirectAfterLogin');
                    console.log(redirectUrl)
                    if (redirectUrl) {
                        this.router.navigateByUrl(redirectUrl); // ✅ kembali ke halaman yang tadi
                        localStorage.removeItem('redirectAfterLogin');
                    } else {
                        this.router.navigate(['/dashboard']); // fallback default
                    }
                })
            ),
        { dispatch: false }
    );

    // redirectAfterLogin$ = createEffect(
    //     () =>
    //         this.actions$.pipe(
    //             ofType(loginSuccess),
    //             tap(() => {
    //                 // Coba ambil returnUrl dari localStorage, kalau tidak ada redirect ke '/'
    //                 const returnUrl = localStorage.getItem('returnUrl') || '/';
    //                 if(returnUrl)
    //                 {
    //                     this.router.navigateByUrl(returnUrl); 
    //                 }
    //                 else
    //                 {
    //                     this.router.navigate(['/']);
    //                 }
                    
    //             })
    //         ),
    //     { dispatch: false } // ini hanya side effect, tidak dispatch action baru
    // );

    loadCurrentUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loginSuccess, loadCurrentUser),
            switchMap(() =>
                this.authApi.getCurrentUser().pipe(
                    map(res =>
                        loadCurrentUserSuccess({
                            user: res.user,
                            role: res.role,
                            pegawai: res.pegawai
                        })
                    ),
                    catchError(error => of(loadCurrentUserFailure({ error })))
                )
            )
        )
    );

    logout$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(logout),
                tap(() => {
                    this.authApi.logout();
                    this.router.navigate(['/auth/login']);
                })
            ),
        { dispatch: false }
    );

    refreshToken$ = createEffect(() =>
        this.actions$.pipe(
            ofType(refreshToken),
            switchMap(({ refreshToken }) =>
                this.authApi.refreshToken(refreshToken).pipe(
                    map(res =>
                        refreshTokenSuccess({
                            token: res.refreshToken 
                        })
                    ),
                    catchError(error => of(refreshTokenFailure({ error })))
                )
            )
        )
    );

    // Optional auto-refresh setiap 5 menit
    refreshTokenInterval$ = createEffect(() =>
        interval(5 * 60 * 1000).pipe(
            startWith(0),
            withLatestFrom(
                this.store.select(getAuthToken),
                this.store.select(getRefreshToken)
            ),
            filter(([_, accessToken, refreshToken]) => !!refreshToken), // pastikan tidak null
            switchMap(([_, __, refreshToken]) =>
                this.authApi.refreshToken(refreshToken!).pipe( // pakai non-null assertion (!) di sini
                    map(res => refreshTokenSuccess({ token: res.refreshToken })),
                    catchError(error => of(refreshTokenFailure({ error })))
                )
            )
        )
    );

}
