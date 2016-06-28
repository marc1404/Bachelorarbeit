'use strict';

import {Component} from '@angular/core';
import {Phone, PhoneData} from '../core/phone/phone.service';
import {CheckmarkPipe} from '../core/checkmark/checkmark.pipe';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'phone-detail',
    templateUrl: 'phone-detail/phone-detail.template.html',
    pipes: [CheckmarkPipe]
})
export class PhoneDetailComponent {

    phone:PhoneData;
    mainImageUrl:string;

    constructor(phone:Phone, route:ActivatedRoute) {
        //noinspection TypeScriptUnresolvedVariable
        const phoneId = route.snapshot.params.phoneId;

        phone.get(phoneId).subscribe(data => {
            this.phone = data;

            this.setImage(data.images[0]);
        });
    }

    setImage(imageUrl:string) {
        this.mainImageUrl = imageUrl;
    }

}