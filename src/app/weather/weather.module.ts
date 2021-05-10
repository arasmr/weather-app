import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WeatherOverviewComponent} from './containers/weather-overview/weather-overview.component';
import {CityWeatherInfoComponent} from './components/city-weather-info/city-weather-info.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {WeatherForecastOverviewComponent} from './containers/weather-forecast-overview/weather-forecast-overview.component';
import {HourlyForecastComponent} from './components/hourly-forecast/hourly-forecast.component';
import {CurrentWeatherInfoBoxComponent} from './components/current-weather-info-box/current-weather-info-box.component';

@NgModule({
    declarations: [
        WeatherOverviewComponent,
        CityWeatherInfoComponent,
        WeatherForecastOverviewComponent,
        HourlyForecastComponent,
        CurrentWeatherInfoBoxComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild([
            {
                path: '',
                component: WeatherOverviewComponent
            },
            {
                path: 'forecast/:cityName',
                component: WeatherForecastOverviewComponent
            },
        ]),
    ],
})
export class WeatherModule {
}
