import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-tech-log-item-share-header',
    templateUrl: './tech-log-item-share-header.component.html',
    styleUrl: './tech-log-item-share-header.component.scss'
})
export class TechLogItemShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
