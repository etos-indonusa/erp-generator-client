import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectMenuMode } from 'src/libs/auth/store/auth.selectors';
import { BaseTopMenuComponent } from '../base-top-menu/base-top-menu.component';
import { BaseComponent } from '../base/base.component';
import { FooterComponent } from '../footer/footer.component';
import { NavbarMenuComponent } from '../navbar-menu/navbar-menu.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
    selector: 'app-layout-wrapper',
    standalone: true,
    imports: [
        CommonModule,
        RouterOutlet,
        NavbarComponent,
        FooterComponent,
        NavbarMenuComponent,
        NgFor,
        NgIf,
        BaseComponent,
        BaseTopMenuComponent
    ],
    templateUrl: './layout-wrapper.component.html',
    styleUrl: './layout-wrapper.component.scss'
})
export class LayoutWrapperComponent {
    menuMode$ = this.store.select(selectMenuMode);

    constructor(private store: Store) { }
}
