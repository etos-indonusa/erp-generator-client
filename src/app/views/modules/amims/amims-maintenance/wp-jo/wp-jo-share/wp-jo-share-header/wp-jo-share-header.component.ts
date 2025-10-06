import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-wp-jo-share-header',
    templateUrl: './wp-jo-share-header.component.html',
    styleUrl: './wp-jo-share-header.component.scss'
})
export class WpJoShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
