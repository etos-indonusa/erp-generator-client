import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
    enableProdMode();
}

window.addEventListener('unhandledrejection', function (event) {
    console.error('🔥 Unhandled Promise Rejection:', event.reason);
});

platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
