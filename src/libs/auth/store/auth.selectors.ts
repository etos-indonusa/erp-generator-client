
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.models';

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const getCurrentUser = createSelector(
    selectAuthState,
    (state) => state?.user
);
export const getRole = createSelector(selectAuthState, state => state.role);
export const getPegawai = createSelector(selectAuthState, state => state.pegawai);
export const getIsLoading = createSelector(selectAuthState, state => state.isLoading);
export const getAuthToken = createSelector(selectAuthState, state => state.token);
export const getRefreshToken = createSelector(selectAuthState, state => state.refresh_token);
