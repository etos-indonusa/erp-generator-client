import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ThemeModeService } from '../../../core/services/theme-mode.service';
import { NgClass, NgFor, NgIf } from '@angular/common';
 
import { FeatherIconDirective } from '../../../core/feather-icon/feather-icon.directive';
import { MENU } from '../sidebar/menu';
import { MenuItem } from './menu.model';
import { convertGroupedSidebarToTopbar } from './menu-converter';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NavbarComponent } from '../navbar/navbar.component';
import { HeaderModule } from '../header/header.module';
 

@Component({
  selector: 'app-navbar-menu',
    standalone: true,
    imports: [
        NgbDropdownModule,
        FeatherIconDirective,
        RouterLink,
        RouterLinkActive,
        NgFor,
        NgIf,
        NgClass,
        NzSwitchModule,
        NavbarComponent,
        HeaderModule
    ],
  templateUrl: './navbar-menu.component.html',
  styleUrl: './navbar-menu.component.scss'
})
export class NavbarMenuComponent implements OnInit {
    currentTheme: string;
    menuItems: MenuItem[] = []
 
    currentlyOpenedNavItem: HTMLElement | undefined;

    constructor(
        private router: Router,
        private themeModeService: ThemeModeService
    ) { }

    ngOnInit(): void {
        this.themeModeService.currentTheme.subscribe((theme) => {
            this.currentTheme = theme;
            this.showActiveTheme(this.currentTheme);
        });
 
        this.menuItems = convertGroupedSidebarToTopbar(MENU);
        /**
         * Close the header menu after a route change on tablet and mobile devices
         */
        // if (window.matchMedia('(max-width: 991px)').matches) {
        this.router.events.forEach((event) => {
            if (event instanceof NavigationEnd) {
                document.querySelector('.horizontal-menu .bottom-navbar')?.classList.remove('header-toggled');
                document.querySelector('[data-toggle="horizontal-menu-toggle"]')?.classList.remove('open');
                document.body.classList.remove('header-open');
            }
        });
        // }
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
     * Logout
     */
    onLogout(e: Event) {
        e.preventDefault();

        localStorage.setItem('isLoggedin', 'false');
        if (localStorage.getItem('isLoggedin') === 'false') {
            this.router.navigate(['/auth/login']);
        }
    }

    /**
     * Fixed header menu on scroll
     */
    @HostListener('window:scroll', ['$event']) getScrollHeight() {
        if (window.matchMedia('(min-width: 992px)').matches) {
            let header: HTMLElement = document.querySelector('.horizontal-menu') as HTMLElement;
            if (window.pageYOffset >= 60) {
                header.parentElement!.classList.add('fixed-on-scroll')
            } else {
                header.parentElement!.classList.remove('fixed-on-scroll')
            }
        }
    }

    /**
     * Returns true or false depending on whether the given menu item has a child
     * @param item menuItem
     */
    hasItems(item: MenuItem) {
        return item.subMenus !== undefined ? item.subMenus.length > 0 : false;
    }

    /**
     * Toggle the header menu on tablet and mobile devices
     */
    toggleHeaderMenu() {
        // document.querySelector('.horizontal-menu .bottom-navbar')!.classList.toggle('header-toggled');

        const horizontalMenuToggleButton = document.querySelector('[data-toggle="horizontal-menu-toggle"]');
        const bottomNavbar = document.querySelector('.horizontal-menu .bottom-navbar');
        if (!bottomNavbar?.classList.contains('header-toggled')) {
            bottomNavbar?.classList.add('header-toggled');
            horizontalMenuToggleButton?.classList.add('open');
            document.body.classList.add('header-open'); // Used to create a backdrop"
        } else {
            bottomNavbar?.classList.remove('header-toggled');
            horizontalMenuToggleButton?.classList.remove('open');
            document.body.classList.remove('header-open');
        }
    }

    // Show or hide the submenu on mobile and tablet devices when a nav-item is clicked
    toggleSubmenuOnSmallDevices(navItem: HTMLElement) {
        if (window.matchMedia('(max-width: 991px)').matches) {
            if (this.currentlyOpenedNavItem === navItem) {
                this.currentlyOpenedNavItem = undefined;
            } else {
                this.currentlyOpenedNavItem = navItem;
            }
        }
    }
}
