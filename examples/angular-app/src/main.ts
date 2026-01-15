import 'zone.js';
import { defineCustomElements } from '@lux/components/loader';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

// Register custom elements
defineCustomElements();

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
