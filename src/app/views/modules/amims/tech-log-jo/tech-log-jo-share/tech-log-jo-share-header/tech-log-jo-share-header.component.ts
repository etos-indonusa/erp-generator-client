import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-tech-log-jo-share-header',
    templateUrl: './tech-log-jo-share-header.component.html',
    styleUrl: './tech-log-jo-share-header.component.scss'
})
export class TechLogJoShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
