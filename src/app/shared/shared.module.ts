import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CelciusPipe} from './pipes/celcius/celcius.pipe';
import {RoundPipe} from './pipes/round/round.pipe';


@NgModule({
    declarations: [
        CelciusPipe,
        RoundPipe
    ],
    exports: [
        CelciusPipe,
        RoundPipe
    ],
    imports: [
        CommonModule
    ]
})
export class SharedModule {
}
