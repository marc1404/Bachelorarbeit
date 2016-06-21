import {UpgradeAdapter} from '@angular/upgrade';
import {HTTP_PROVIDERS} from '@angular/http';

const upgradeAdapter = new UpgradeAdapter();

upgradeAdapter.bootstrap(document.documentElement, ['phonecatApp']);
upgradeAdapter.addProvider(HTTP_PROVIDERS);