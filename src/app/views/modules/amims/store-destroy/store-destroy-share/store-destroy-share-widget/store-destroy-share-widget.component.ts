import { Component, Input, SimpleChanges } from '@angular/core';
import { StoreDestroyWidgetService } from 'de-sdk-core';

@Component({
    selector: 'app-store-destroy-share-widget',
    templateUrl: './store-destroy-share-widget.component.html',
    styleUrl: './store-destroy-share-widget.component.scss'
})
export class StoreDestroyShareWidgetComponent {
    @Input('filter') filter: any = {};
    @Input('reload') reload: number = 0;
    constructor(
        private storeDestroyWidgetService: StoreDestroyWidgetService,
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
    //[{"type":"count","field":"status_store-destroy_site","alias":"total"}, {"type":"max","field":"status_store-destroy_site","alias":"status_store-destroy_site"}]
    getDataWidget() {
        this.is_loading = true;
        this.storeDestroyWidgetService
            .storeDestroyWidgetControllerFindAll({
                body: {
                    filter: this.filter,
                    select: [
                        {
                            type: "count",
                            field:"status_store_destroy" ,
                            alias: "jumlah" 
                        }
                    ],
                    groupBy:  ['status_store_destroy'],
                    sortKey: "status_store_destroy",
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
