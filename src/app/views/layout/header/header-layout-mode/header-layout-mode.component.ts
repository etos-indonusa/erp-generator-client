import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ThemeModeService } from 'src/app/core/services/theme-mode.service';
import { setMenuMode } from 'src/libs/auth/store/auth.actions';
import { selectMenuMode } from 'src/libs/auth/store/auth.selectors';

@Component({
  selector: 'app-header-layout-mode',
  templateUrl: './header-layout-mode.component.html',
  styleUrl: './header-layout-mode.component.scss'
})
export class HeaderLayoutModeComponent {
    menuMode$: Observable<'sidebar' | 'topbar'>;




    constructor(
        private store: Store,
        private router: Router,
        private themeModeService: ThemeModeService
    ) {
        this.menuMode$ = this.store.select(selectMenuMode);
    }

    currentTheme: string;
    ngOnInit(): void {
        
    }

    onToggleMenu(checked: boolean) {
        const mode = checked ? 'topbar' : 'sidebar';
        this.store.dispatch(setMenuMode({ mode }));
        localStorage.setItem('menuMode', mode); // ✅ simpan ke localStorage
    }
}
