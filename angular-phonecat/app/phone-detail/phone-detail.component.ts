'use strict';

import {Component, Inject} from '@angular/core';
import {Phone, PhoneData} from '../core/phone/phone.service';

@Component({
    selector: 'phone-detail',
    templateUrl: 'phone-detail/phone-detail.template.html'
})
export class PhoneDetailController {

    phone:PhoneData;
    mainImageUrl:string;

    constructor(@Inject('$routeParams') $routeParams:angular.route.IRouteParamsService, phone:Phone) {
        let phoneId = $routeParams['phoneId'];

        phone.get(phoneId).subscribe(data => {
            this.phone = data;

            this.setImage(data.images[0]);
        });
    }

    setImage(imageUrl:string) {
        this.mainImageUrl = imageUrl;
    }

}