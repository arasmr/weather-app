import {Component, Input} from '@angular/core';
import {Forecast} from '../../../core/models/weather';

@Component({
    selector: 'wa-hourly-forecast',
    templateUrl: './hourly-forecast.component.html',
    styleUrls: ['./hourly-forecast.component.scss']
})
export class HourlyForecastComponent {
    @Input() hourlyForecast: Forecast | null;
}
