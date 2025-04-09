import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeModeService } from './core/services/theme-mode.service';
import { TranslateService } from '@ngx-translate/core';
import { TampilanModule } from './shared/tampilan.module';

@Component({
    selector: 'app-root',  
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'erp';

    constructor(private themeModeService: ThemeModeService, private translate: TranslateService) {
        translate.setDefaultLang('id');
        translate.use('id');
    }
     

}
