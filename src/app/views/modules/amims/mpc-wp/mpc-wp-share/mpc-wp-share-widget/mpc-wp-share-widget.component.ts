import { Component, Input, SimpleChanges } from '@angular/core';
import { MpcWpWidgetService } from 'de-sdk-core/services/mpc-wp-widget.service';

@Component({
    selector: 'app-mpc-wp-share-widget',
    templateUrl: './mpc-wp-share-widget.component.html',
    styleUrl: './mpc-wp-share-widget.component.scss'
})
export class MpcWpShareWidgetComponent {
    @Input('filter') filter: any = {};
    @Input('reload') reload: number = 0;
    constructor(
        private mpcWpWidgetService: MpcWpWidgetService,
    ) { }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.reload) {
            if (changes.reload.currentValue != changes.reload.previousValue && changes.reload.currentValue > 1) {
                this.getDataWidget()
            }
        }
    }
 
    ngOnInit(): void {
        this.getDataWidget()
    }

    breadCrumbItems = [
        { label: 'List', active: false }
    ]
    is_loading: boolean = false
    total: number = 0;
    status_urutan: any[] = []
    //[{"type":"count","field":"status_mpc-wp_site","alias":"total"}, {"type":"max","field":"status_mpc-wp_site","alias":"status_mpc-wp_site"}]
    getDataWidget() {
        this.is_loading = true;
        this.mpcWpWidgetService
            .mpcWpWidgetControllerFindAll({
                body: {
                    filter: this.filter,
                    select: [
                        {
                            type: "count",
                            field:"status_mpc_wp" ,
                            alias: "jumlah" 
                        }
                    ],
                    groupBy:  ['status_mpc_wp'],
                    sortKey: "status_mpc_wp",
                    sortValue: "ASC"
                }
            })
            .subscribe((data) => {
                this.total = data.total ?? 0;
                this.status_urutan = data.data ?? [] ; 
                this.status_urutan.forEach(x => {
                    this.total = this.total + x.jumlah * 1
                })
                this.is_loading = false;
            });
    }
}
