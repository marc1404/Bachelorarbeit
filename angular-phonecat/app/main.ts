import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
import {Phone} from './core/phone/phone.service';
import {routes} from './app.routes';
import {provideRouter} from '@angular/router';
import {AppComponent} from './app.component';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

bootstrap(AppComponent, [
    provideRouter(routes),
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    HTTP_PROVIDERS,
    Phone
]).catch(err => console.error(err));