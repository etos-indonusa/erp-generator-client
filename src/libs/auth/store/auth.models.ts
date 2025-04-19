
export interface AuthState {
    user: any;
    role: any;
    pegawai: any;
    token: string | null;
    refresh_token: string | null;
    isLoading: boolean;
    error: string | null;
    menuMode: MenuMode;

}
export type MenuMode = 'sidebar' | 'topbar';