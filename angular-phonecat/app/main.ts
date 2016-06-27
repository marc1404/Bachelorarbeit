import {UpgradeAdapter} from '@angular/upgrade';
import {HTTP_PROVIDERS} from '@angular/http';
import {Phone} from './core/phone/phone.service';

const upgradeAdapter = new UpgradeAdapter();

angular.module('core.phone')
    .factory('phone', upgradeAdapter.downgradeNg2Provider(Phone));

upgradeAdapter.addProvider(HTTP_PROVIDERS);
upgradeAdapter.addProvider(Phone);

upgradeAdapter.bootstrap(document.documentElement, ['phonecatApp']);