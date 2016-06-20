import {UpgradeAdapter} from '@angular/upgrade';

const upgradeAdapter = new UpgradeAdapter();

upgradeAdapter.bootstrap(document.documentElement, ['phonecatApp']);