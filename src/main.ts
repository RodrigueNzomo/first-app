// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));
import { enableDebugTools } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { ApplicationRef } from '@angular/core';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then((moduleRef) => {
    const appRef = moduleRef.injector.get(ApplicationRef);
    const appComponent = appRef.components[0];
    enableDebugTools(appComponent);
  })
  .catch((err) => console.error(err));
