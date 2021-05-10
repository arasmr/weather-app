import {Component, Input} from '@angular/core';
import {CityWeatherInfo} from 'src/app/core/models/weather';
import {Router} from '@angular/router';

@Component({
    selector: 'wa-city-weather-info',
    templateUrl: './city-weather-info.component.html',
    styleUrls: ['./city-weather-info.component.scss'],
})
export class CityWeatherInfoComponent {
    @Input() cityWeatherInfo: CityWeatherInfo | undefined | null;

    constructor(
        private router: Router,
    ) {
    }

    public navigateToForecastPage(city: string): void {
        this.router.navigate(['forecast', city]);
    }
}
