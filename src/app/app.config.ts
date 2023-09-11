import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { PreloadAllModules, RouterModule, provideRouter } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(BrowserAnimationsModule, BrowserModule,
      RouterModule.forRoot([], {
        preloadingStrategy: PreloadAllModules, // Preload all lazy-loaded modules
      }),)
  ]
};
