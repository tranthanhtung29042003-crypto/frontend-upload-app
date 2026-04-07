import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { LOCALE_ID } from '@angular/core';
import localeVi from '@angular/common/locales/vi';
import { registerLocaleData } from '@angular/common';

import { routes } from './app.routes';

registerLocaleData(localeVi);

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: LOCALE_ID, useValue: 'vi-VN' },
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes)
  ]
};
