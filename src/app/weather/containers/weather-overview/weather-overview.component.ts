import {Component, OnInit} from '@angular/core';
import {citiesData, CityWeatherInfo} from 'src/app/core/models/weather';
import {WeatherService} from '../../../core/services/weather.service';

@Component({
    selector: 'wa-weather-overview',
    templateUrl: './weather-overview.component.html',
    styleUrls: ['./weather-overview.component.scss'],
})
export class WeatherOverviewComponent implements OnInit {
    public cities = citiesData;
    public citiesWeatherInfo: CityWeatherInfo[] = [];

    constructor(
        private readonly weatherService: WeatherService,
    ) {
    }

    ngOnInit(): void {
        this.getCitiesWeatherInfo();
    }

    public getCitiesWeatherInfo(): void {
        citiesData.forEach((city: string) => {
            this.weatherService.getCurrentWeather(city).subscribe(value => {
                this.citiesWeatherInfo.push(value);
            });
        });
    }
}
