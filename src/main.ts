import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

let title = 'angular-tour-of-heroes';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
