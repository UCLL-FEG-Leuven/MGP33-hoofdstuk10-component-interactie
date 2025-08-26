import { bootstrapApplication } from '@angular/platform-browser';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app/app.routes';
import { App } from './app/app';

bootstrapApplication(App, {providers: [
  provideZonelessChangeDetection(),
  provideRouter(routes)
]})
.catch((err) => console.error(err));
