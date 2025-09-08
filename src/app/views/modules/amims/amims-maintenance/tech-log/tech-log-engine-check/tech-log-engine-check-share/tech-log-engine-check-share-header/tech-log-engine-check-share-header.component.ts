import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-tech-log-engine-check-share-header',
    templateUrl: './tech-log-engine-check-share-header.component.html',
    styleUrl: './tech-log-engine-check-share-header.component.scss'
})
export class TechLogEngineCheckShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
