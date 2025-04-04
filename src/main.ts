import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './app/pages/login/login.component';
import { ProfileComponent } from './app/pages/profile/profile.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: 'login', component: LoginComponent },
      { path: 'profile', component: ProfileComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' }
    ]),
    importProvidersFrom(HttpClientModule)
  ]
}).catch(err => console.error(err));
