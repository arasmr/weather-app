import {Inject, LOCALE_ID, Pipe, PipeTransform} from '@angular/core';
import {formatNumber} from '@angular/common';

@Pipe({
    name: 'celcius'
})
export class CelciusPipe implements PipeTransform {

    constructor(
        @Inject(LOCALE_ID) private locale: string
    ) {
    }

    transform(degree: number): string {
        return `${formatNumber(degree, this.locale, '1.0-0')}°C`;
    }

}
