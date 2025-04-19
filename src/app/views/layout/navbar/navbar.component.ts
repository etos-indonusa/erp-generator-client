import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { Observable } from 'rxjs';
import { setMenuMode } from 'src/libs/auth/store/auth.actions';
import { selectMenuMode } from 'src/libs/auth/store/auth.selectors';
import { ThemeModeService } from '../../../core/services/theme-mode.service';
import { HeaderModule } from "../header/header.module";

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [
        NgbDropdownModule,
        RouterLink,
        NzSwitchModule,
        CommonModule,
        FormsModule,
        HeaderModule
    ],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
    menuMode$: Observable<'sidebar' | 'topbar'>;
    currentTheme: string;

    constructor(
        private store: Store,
        private router: Router,
        private themeModeService: ThemeModeService
    ) {
        this.menuMode$ = this.store.select(selectMenuMode);
    }

    ngOnInit(): void {
        this.themeModeService.currentTheme.subscribe((theme) => {
            this.currentTheme = theme;
            this.showActiveTheme(this.currentTheme);
        });

        const savedMode = localStorage.getItem('menuMode');
        if (savedMode === 'topbar' || savedMode === 'sidebar') {
            this.has_top_bar_menu = ''
            if (savedMode == 'topbar') {
                this.has_top_bar_menu = 'top-navbar'
            }
        }
    }
    has_top_bar_menu = 'top-navbar';
    onToggleMenu(checked: boolean) {
        const mode = checked ? 'topbar' : 'sidebar';
        this.store.dispatch(setMenuMode({ mode }));
        localStorage.setItem('menuMode', mode); // ✅ simpan ke localStorage

        this.has_top_bar_menu = ''
        if (mode == 'topbar') {
            this.has_top_bar_menu = 'top-navbar'
        }
    }

    showActiveTheme(theme: string) {
        const themeSwitcher = document.querySelector('#theme-switcher') as HTMLInputElement;
        const box = document.querySelector('.box') as HTMLElement;

        if (!themeSwitcher) {
            return;
        }

        // Toggle the custom checkbox based on the theme
        if (theme === 'dark') {
            themeSwitcher.checked = true;
            box.classList.remove('light');
            box.classList.add('dark');
        } else if (theme === 'light') {
            themeSwitcher.checked = false;
            box.classList.remove('dark');
            box.classList.add('light');
        }
    }

    /**
     * Change the theme on #theme-switcher checkbox changes 
     */
    onThemeCheckboxChange(e: Event) {
        const checkbox = e.target as HTMLInputElement;
        const newTheme: string = checkbox.checked ? 'dark' : 'light';
        this.themeModeService.toggleTheme(newTheme);
        this.showActiveTheme(newTheme);
    }

    /**
     * Toggle the sidebar when the hamburger button is clicked
     */
    toggleSidebar(e: Event) {
        e.preventDefault();
        document.body.classList.add('sidebar-open');
        document.querySelector('.sidebar .sidebar-toggler')?.classList.add('active');
    }

    /**
     * Logout
     */
    onLogout(e: Event) {
        e.preventDefault();

        localStorage.removeItem('access_token');
        if (localStorage.getItem('isLoggedin') === 'false') {
            this.router.navigate(['/auth/login']);
        }
    }

}
