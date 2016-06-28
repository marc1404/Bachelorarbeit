import {RouterConfig} from '@angular/router';
import {PhoneListComponent} from './phone-list/phone-list.component';
import {PhoneDetailComponent} from './phone-detail/phone-detail.component';

export const routes:RouterConfig = [
    {path: '', redirectTo: 'phones'},
    {path: 'phones', component: PhoneListComponent},
    {path: 'phones/:phoneId', component: PhoneDetailComponent}
];