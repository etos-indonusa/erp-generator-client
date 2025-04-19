import { Component, inject, OnInit } from '@angular/core';
import { RouteConfigLoadEnd, RouteConfigLoadStart, Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { NavbarMenuComponent } from "../navbar-menu/navbar-menu.component";

@Component({
    selector: 'app-base-top-menu',
    standalone: true,
    imports: [
        RouterOutlet,
        NavbarComponent,
        FooterComponent,
        NavbarMenuComponent
    ],
    templateUrl: './base-top-menu.component.html',
    styleUrl: './base-top-menu.component.scss'
})
export class BaseTopMenuComponent {
    isLoading: boolean = false;
    private router = inject(Router);

    constructor() { }

    ngOnInit(): void {
        // Spinner for lazy loading modules/components
        this.router.events.forEach((event) => {
            if (event instanceof RouteConfigLoadStart) {
                this.isLoading = true;
            } else if (event instanceof RouteConfigLoadEnd) {
                this.isLoading = false;
            }
        });
    }
}
