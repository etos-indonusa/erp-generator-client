import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-tech-log-engine-share-header',
    templateUrl: './tech-log-engine-share-header.component.html',
    styleUrl: './tech-log-engine-share-header.component.scss'
})
export class TechLogEngineShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
