import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-log-tsn-tso-share-header',
    templateUrl: './log-tsn-tso-share-header.component.html',
    styleUrl: './log-tsn-tso-share-header.component.scss'
})
export class LogTsnTsoShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
