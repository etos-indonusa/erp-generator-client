import { Store } from '@ngrx/store';
import * as AuthActions from '../store/auth.actions';
import { getAuthToken } from '../store/auth.selectors';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, filter, take, switchMap, throwError } from 'rxjs';
import { AuthPublicService } from 'src/sdk/core/services';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    private isRefreshing = false;

    constructor(
        private store: Store,
        private authService: AuthPublicService
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = localStorage.getItem('access_token');
        let authReq = req;

        if (token) {
            authReq = req.clone({
                setHeaders: { Authorization: `Bearer ${token}` }
            });
        }

        return next.handle(authReq).pipe(
            catchError(error => {
                if (error.status === 401 && !this.isRefreshing) {
                    this.isRefreshing = true;
                    const refreshToken = localStorage.getItem('token');

                    if (refreshToken) {
                        this.store.dispatch(AuthActions.refreshToken({ refreshToken }));

                        // Wait for refreshTokenSuccess
                        return this.store.select(getAuthToken).pipe(
                            filter(token => !!token),
                            take(1),
                            switchMap(newToken => {
                                this.isRefreshing = false;
                                const retryReq = req.clone({
                                    setHeaders: { Authorization: `Bearer ${newToken}` }
                                });
                                return next.handle(retryReq);
                            }),
                            catchError(err => {
                                this.isRefreshing = false;
                                return throwError(() => err);
                            })
                        );
                    }
                }

                return throwError(() => error);
            })
        );
    }
}
