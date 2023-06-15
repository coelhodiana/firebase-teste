import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { firebaseProviders } from 'src/environments/environments';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), firebaseProviders],
};
