import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-site-share-header',
    templateUrl: './site-share-header.component.html',
    styleUrl: './site-share-header.component.scss'
})
export class SiteShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
