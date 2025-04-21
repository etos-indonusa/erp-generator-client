import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-rotary-factor-share-header',
    templateUrl: './rotary-factor-share-header.component.html',
    styleUrl: './rotary-factor-share-header.component.scss'
})
export class RotaryFactorShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
