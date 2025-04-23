import { Component, Input, SimpleChanges } from '@angular/core';
import { MpcPiroWidgetService } from 'de-sdk-core';

@Component({
    selector: 'app-mpc-piro-share-widget',
    templateUrl: './mpc-piro-share-widget.component.html',
    styleUrl: './mpc-piro-share-widget.component.scss'
})
export class MpcPiroShareWidgetComponent {
    @Input('filter') filter: any = {};
    @Input('reload') reload: number = 0;
    constructor(
        private mpcPiroWidgetService: MpcPiroWidgetService,
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
    //[{"type":"count","field":"status_mpc-piro_site","alias":"total"}, {"type":"max","field":"status_mpc-piro_site","alias":"status_mpc-piro_site"}]
    getDataWidget() {
        this.is_loading = true;
        this.mpcPiroWidgetService
            .mpcPiroWidgetControllerFindAll({
                body: {
                    filter: this.filter,
                    select: [
                        {
                            type: "count",
                            field:"status_mpc_piro" ,
                            alias: "jumlah" 
                        }
                    ],
                    groupBy:  ['status_mpc_piro'],
                    sortKey: "status_mpc_piro",
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
