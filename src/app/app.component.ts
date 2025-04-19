import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ThemeModeService } from './core/services/theme-mode.service';
import { TranslateService } from '@ngx-translate/core';
import { TampilanModule } from './shared/tampilan.module';
import { filter } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'erp';

    constructor(
        private themeModeService: ThemeModeService,
        private translate: TranslateService,
        private router: Router
    ) {
        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd)
        ).subscribe(event => {
            const nav = event as NavigationEnd; // ✅ cast manual
            // Exclude auth route atau public route jika perlu
            if (!nav.url.includes('/auth')) {
                localStorage.setItem('redirectAfterLogin', nav.urlAfterRedirects);
            }
        });
        translate.setDefaultLang('id');
        translate.use('id');
    }


}
