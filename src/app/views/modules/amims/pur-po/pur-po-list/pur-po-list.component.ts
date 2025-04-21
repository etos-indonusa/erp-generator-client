import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-pur-po-list',
    templateUrl: './pur-po-list.component.html',
    styleUrl: './pur-po-list.component.scss'
})
export class PurPoListComponent {
    constructor(
        private activatedRoute: ActivatedRoute,
    ) { }

    ngOnInit(): void {
        this.activatedRoute.queryParamMap.subscribe(
            data => {
                if (data.get('status')) {
                    this.status = data.get('status') == 'semua' ? null : data.get('status');
                }
            }
        );
    }

    status: string | null = null;
    filter: any = {};

    getFilter($event: any) {
        this.filter = $event;
        this.getReload();
    }

    reload = 1;
    getReload() {
        this.reload = this.reload + 1;
    }
}
