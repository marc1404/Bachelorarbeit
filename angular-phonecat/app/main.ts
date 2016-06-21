import {UpgradeAdapter} from '@angular/upgrade';
import {HTTP_PROVIDERS} from '@angular/http';
import {Phone} from './core/phone/phone.service';

const upgradeAdapter = new UpgradeAdapter();

upgradeAdapter.bootstrap(document.documentElement, ['phonecatApp']);
upgradeAdapter.addProvider(HTTP_PROVIDERS);
upgradeAdapter.addProvider(Phone);

angular.module('core.phone')
    .factory('phone', upgradeAdapter.downgradeNg2Provider(Phone));