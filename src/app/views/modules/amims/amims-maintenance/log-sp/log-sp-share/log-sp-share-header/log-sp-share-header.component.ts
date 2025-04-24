import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-log-sp-share-header',
    templateUrl: './log-sp-share-header.component.html',
    styleUrl: './log-sp-share-header.component.scss'
})
export class LogSpShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
