import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherForecastOverviewComponent } from './weather-forecast-overview.component';

describe('WeatherForecastOverviewComponent', () => {
  let component: WeatherForecastOverviewComponent;
  let fixture: ComponentFixture<WeatherForecastOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherForecastOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherForecastOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
