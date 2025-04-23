import { Component, Input, SimpleChanges } from '@angular/core';
import { MpcJoWidgetService } from 'de-sdk-core/lib/services/mpc-jo-widget.service';

@Component({
    selector: 'app-mpc-jo-share-widget',
    templateUrl: './mpc-jo-share-widget.component.html',
    styleUrl: './mpc-jo-share-widget.component.scss'
})
export class MpcJoShareWidgetComponent {
    @Input('filter') filter: any = {};
    @Input('reload') reload: number = 0;
    constructor(
        private mpcJoWidgetService: MpcJoWidgetService,
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
    //[{"type":"count","field":"status_mpc-jo_site","alias":"total"}, {"type":"max","field":"status_mpc-jo_site","alias":"status_mpc-jo_site"}]
    getDataWidget() {
        this.is_loading = true;
        this.mpcJoWidgetService
            .mpcJoWidgetControllerFindAll({
                body: {
                    filter: this.filter,
                    select: [
                        {
                            type: "count",
                            field:"status_mpc_jo" ,
                            alias: "jumlah" 
                        }
                    ],
                    groupBy:  ['status_mpc_jo'],
                    sortKey: "status_mpc_jo",
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
