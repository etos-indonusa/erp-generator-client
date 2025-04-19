import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-header-bahasa',
    templateUrl: './header-bahasa.component.html',
    styleUrl: './header-bahasa.component.scss'
})
export class HeaderBahasaComponent {

    constructor(private translate: TranslateService) {
        translate.setDefaultLang('id');
        translate.use('id');
    }

    changeLang(lang: 'id' | 'en') {
        localStorage.setItem('lang', lang);
        this.translate.use(lang); // kalau pakai ngx-translate
    }
}
