import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-qa-rpd-dispotition-share-header',
    templateUrl: './qa-rpd-dispotition-share-header.component.html',
    styleUrl: './qa-rpd-dispotition-share-header.component.scss'
})
export class QaRpdDispotitionShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
