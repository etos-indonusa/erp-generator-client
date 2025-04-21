import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-part-install-share-header',
    templateUrl: './part-install-share-header.component.html',
    styleUrl: './part-install-share-header.component.scss'
})
export class PartInstallShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
