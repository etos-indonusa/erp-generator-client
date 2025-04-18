import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-users-share-header',
    templateUrl: './users-share-header.component.html',
    styleUrl: './users-share-header.component.scss'
})
export class UsersShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
