export interface CityWeatherInfo {
    imagePath: string;
    weather: {
        main: string;
        icon: string;
    }[];
    main: {
        temp: number;
    };
    wind: {
        speed: number;
    };
    dt: number;
    name: string;
}

export interface Forecast {
    imagePath: string;
    city: {
        name: string;
    };
    list: {
        dt: number;
        main: {
            temp: number;
        },
        weather: {
            id: number;
            main: string;
            description: string;
            icon: string;
        }[],
        clouds: {
            all: number
        },
        wind: {
            speed: number,
        },
    }[];
}

export const citiesData = [
    'Amsterdam',
    'Berlin',
    'Paris',
    'Stockholm',
    'Rome'
];
