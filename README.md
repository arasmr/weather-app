# WeatherApp

The website of Weather App, was build using:
* [Typescript](https://www.typescriptlang.org/docs/index.html)
* [SASS](http://sass-lang.com/) - CSS extension language.
* [Open Weather Map](https://openweathermap.org/api) Public weather api

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.11. This project displays the weather
information of 5 selected European cities in an overview. Clicking each city displays the hourly forecast of selected city. The data displayed
on the page is fetched from [Open Weather Map](https://openweathermap.org/api).

## Environments

| Environment | Server                                                  |
| ----------- | ------------------------------------------------------- |
| Local       | <http://localhost:4200/>                                |
| Production  | <https://mraras-weatherapp.netlify.app/>

## Install Node

Make sure you have a recent version of *Node* (atleast the latest LTS version).
Since *NPM* updates frequently, it is recommended to also update npm:

    npm update -g npm

## Installation

Clone the repository and run `npm ci` to install the required dependencies to be able to run the project.

## Development server - Usage

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

