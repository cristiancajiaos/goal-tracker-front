import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Layout } from './components/layout/layout';
import { Navbar } from './components/layout/navbar/navbar';
import { Main } from './components/layout/main/main';
import { Footer } from './components/layout/footer/footer';
import {provideHttpClient, withFetch} from '@angular/common/http';
import {ToastrModule} from 'ngx-toastr';
import {provideAnimations} from '@angular/platform-browser/animations';
import {provideSweetAlert2} from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  declarations: [
    App,
    Layout,
    Navbar,
    Main,
    Footer
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    ToastrModule.forRoot()
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withFetch()),
    provideAnimations(),
    provideSweetAlert2({
      dismissOnDestroy: false
    })
  ],
  bootstrap: [App]
})
export class AppModule { }
