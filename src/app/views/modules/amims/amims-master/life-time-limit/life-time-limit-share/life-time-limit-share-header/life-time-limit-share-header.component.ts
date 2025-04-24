import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-life-time-limit-share-header',
    templateUrl: './life-time-limit-share-header.component.html',
    styleUrl: './life-time-limit-share-header.component.scss'
})
export class LifeTimeLimitShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
