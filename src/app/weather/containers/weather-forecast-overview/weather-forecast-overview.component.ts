import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {CityWeatherInfo, Forecast} from '../../../core/models/weather';
import {ActivatedRoute} from '@angular/router';
import {WeatherService} from '../../../core/services/weather.service';

@Component({
    selector: 'wa-weather-forecast-overview',
    templateUrl: './weather-forecast-overview.component.html',
    styleUrls: ['./weather-forecast-overview.component.scss']
})
export class WeatherForecastOverviewComponent {
    public cityForecast: Observable<Forecast>;
    public currentWeatherInfo: Observable<CityWeatherInfo>;

    constructor(
        private weatherService: WeatherService,
        private activatedRoute: ActivatedRoute
    ) {
        this.activatedRoute.params.subscribe(params => {
            if (params.cityName) {
                this.cityForecast = this.getForecastByCity(params.cityName);
                this.currentWeatherInfo = this.getCurrentWeatherByCityName(params.cityName);
            }
        });
    }

    public getForecastByCity(city: string): Observable<Forecast> {
        return this.weatherService.getForecastByCityName(city);
    }

    public getCurrentWeatherByCityName(city: string): Observable<CityWeatherInfo> {
        return this.weatherService.getCurrentWeather(city);
    }
}
