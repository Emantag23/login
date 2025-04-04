import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [],
  imports: [AppComponent, LoginComponent],
  // Removed AppComponent from bootstrap as it is a standalone component
})
export class AppModule { }
