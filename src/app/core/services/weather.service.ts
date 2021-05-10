import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CityWeatherInfo, Forecast} from '../models/weather';
import {map} from 'rxjs/operators';
import {formatNumber} from '@angular/common';

@Injectable({
    providedIn: 'root',
})
export class WeatherService {
    constructor(
        private readonly http: HttpClient
    ) {}

    public getCurrentWeather(city: string): Observable<CityWeatherInfo> {
        return this.http.get<CityWeatherInfo>(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=57c38673048113fae72422cc16189a30&units=metric`
        ).pipe(
            map(response => this.parseCurrentWeatherResponse(response))
        );
    }

    public getForecastByCityName(city: string): Observable<Forecast> {
        return this.http.get<Forecast>(
            `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=57c38673048113fae72422cc16189a30&units=metric&cnt=5`
        ).pipe(
            map(response => this.parseForecastResponse(response))
        );
    }

    parseCurrentWeatherResponse(cityWeatherInfo: CityWeatherInfo): CityWeatherInfo {
        cityWeatherInfo.imagePath = `assets/images/${cityWeatherInfo.name.toLowerCase()}.jpeg`;
        cityWeatherInfo.weather[0].icon = `https://openweathermap.org/img/w/${cityWeatherInfo.weather[0].icon}.png`;

        return cityWeatherInfo;
    }

    parseForecastResponse(forecast: Forecast): Forecast {
        forecast.imagePath = `assets/images/${forecast.city.name.toLowerCase()}.jpeg`;
        forecast.list.map(listItem => {
            listItem.weather[0].icon = `https://openweathermap.org/img/w/${listItem.weather[0].icon}.png`;
        });

        return forecast;
    }
}
