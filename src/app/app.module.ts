import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        CommonModule,
        CoreModule,
        HttpClientModule,
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ],
})
export class AppModule {}
