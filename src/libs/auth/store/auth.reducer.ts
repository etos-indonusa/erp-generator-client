
import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';
import { refreshTokenSuccess } from './auth.actions';
import { AuthState } from './auth.models';

export const initialState: AuthState = {
    user: null,
    role: null,
    pegawai: null,
    token: null,
    refresh_token: null,
    isLoading: false,
    error: null,
};

export const authReducer = createReducer(
    initialState,
    on(AuthActions.login, state => ({ ...state, isLoading: true })),
    on(AuthActions.loginSuccess, (state, { token }) => ({ ...state, token, isLoading: false })),
    on(AuthActions.loginFailure, (state, { error }) => ({ ...state, error, isLoading: false })),
    on(AuthActions.loadCurrentUser, state => ({ ...state, isLoading: true })),
    on(AuthActions.loadCurrentUserSuccess, (state, { user, role, pegawai }) => ({
        ...state,
        user,
        role,
        pegawai,
        isLoading: false,
    })),
    on(AuthActions.loadCurrentUserFailure, (state, { error }) => ({ ...state, error, isLoading: false })),
    on(AuthActions.logout, state => ({ ...initialState })),
    on(refreshTokenSuccess, (state, { token }) => ({
        ...state,
        token // ⬅️ update token-nya
    }))
);
