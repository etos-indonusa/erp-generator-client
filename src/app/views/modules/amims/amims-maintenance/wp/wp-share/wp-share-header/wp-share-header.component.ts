import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-wp-share-header',
    templateUrl: './wp-share-header.component.html',
    styleUrl: './wp-share-header.component.scss'
})
export class WpShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
