import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-tech-log-share-header',
    templateUrl: './tech-log-share-header.component.html',
    styleUrl: './tech-log-share-header.component.scss'
})
export class TechLogShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
