import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-qa-rpd-share-header',
    templateUrl: './qa-rpd-share-header.component.html',
    styleUrl: './qa-rpd-share-header.component.scss'
})
export class QaRpdShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
