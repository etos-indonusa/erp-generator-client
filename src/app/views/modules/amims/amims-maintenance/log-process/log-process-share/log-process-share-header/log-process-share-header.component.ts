import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-log-process-share-header',
    templateUrl: './log-process-share-header.component.html',
    styleUrl: './log-process-share-header.component.scss'
})
export class LogProcessShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
