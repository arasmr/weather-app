import {Component, Input, OnInit} from '@angular/core';
import {CityWeatherInfo} from '../../../core/models/weather';

@Component({
    selector: 'wa-current-weather-info-box',
    templateUrl: './current-weather-info-box.component.html',
    styleUrls: ['./current-weather-info-box.component.scss']
})
export class CurrentWeatherInfoBoxComponent {
    @Input() currentWeather: CityWeatherInfo | null;
}
