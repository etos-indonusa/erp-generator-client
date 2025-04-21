import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-part-install-old-share-header',
    templateUrl: './part-install-old-share-header.component.html',
    styleUrl: './part-install-old-share-header.component.scss'
})
export class PartInstallOldShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
