import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentWeatherInfoBoxComponent } from './current-weather-info-box.component';

describe('CurrentWeatherInfoBoxComponent', () => {
  let component: CurrentWeatherInfoBoxComponent;
  let fixture: ComponentFixture<CurrentWeatherInfoBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentWeatherInfoBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentWeatherInfoBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
