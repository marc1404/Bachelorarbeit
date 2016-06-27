'use strict';

import {Component} from '@angular/core';
import {Phone, PhoneData} from '../core/phone/phone.service';

@Component({
    selector: 'phone-list',
    templateUrl: 'phone-list/phone-list.template.html'
})
class PhoneListComponent {

    phones:PhoneData[];
    query:string;
    orderProp:string;

    constructor(phone:Phone) {
        phone.query().subscribe(phones => {
            this.phones = phones;
        });

        this.orderProp = 'age';
    }

}
