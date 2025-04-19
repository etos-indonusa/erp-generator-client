
import { createAction, props } from '@ngrx/store';

export const login = createAction('[Auth] Login', props<{ email: string; password: string }>());
export const loginSuccess = createAction('[Auth] Login Success', props<{ token: string, refresh_token: string }>());

export const loginFailure = createAction('[Auth] Login Failure', props<{ error: string }>());

export const loadCurrentUser = createAction('[Auth] Load Current User');
export const loadCurrentUserSuccess = createAction('[Auth] Load Current User Success', props<{ user: any; role: any; pegawai: any }>());

export const loadCurrentUserFailure = createAction('[Auth] Load Current User Failure', props<{ error: string }>());

export const logout = createAction('[Auth] Logout');

export const refreshToken = createAction('[Auth] Refresh Token', props<{ refreshToken: string }>());
export const refreshTokenSuccess = createAction('[Auth] Refresh Token Success', props<{ token: string }>());
export const refreshTokenFailure = createAction('[Auth] Refresh Token Failure', props<{ error: string }>());

export const setMenuMode = createAction(
    '[Layout] Set Menu Mode',
    props<{ mode: 'sidebar' | 'topbar' }>()
);
 

