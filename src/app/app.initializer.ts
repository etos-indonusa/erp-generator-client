import { Store } from '@ngrx/store';
import { setMenuMode } from 'src/libs/auth/store/auth.actions';

export function menuModeInitializerFactory(store: Store) {
    return () => {
        const savedMode = localStorage.getItem('menuMode');
        if (savedMode === 'topbar' || savedMode === 'sidebar') {
            store.dispatch(setMenuMode({ mode: savedMode }));
        }
    };
}