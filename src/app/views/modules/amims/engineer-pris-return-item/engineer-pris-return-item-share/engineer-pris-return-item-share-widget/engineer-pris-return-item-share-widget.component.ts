import { Component, Input, SimpleChanges } from '@angular/core';
import { EngineerPrisReturnItemWidgetService } from 'src/sdk/core/services/engineer-pris-return-item-widget.service';

@Component({
    selector: 'app-engineer-pris-return-item-share-widget',
    templateUrl: './engineer-pris-return-item-share-widget.component.html',
    styleUrl: './engineer-pris-return-item-share-widget.component.scss'
})
export class EngineerPrisReturnItemShareWidgetComponent {
    @Input('filter') filter: any = {};
    @Input('reload') reload: number = 0;
    constructor(
        private engineerPrisReturnItemWidgetService: EngineerPrisReturnItemWidgetService,
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
    //[{"type":"count","field":"status_engineer-pris-return-item_site","alias":"total"}, {"type":"max","field":"status_engineer-pris-return-item_site","alias":"status_engineer-pris-return-item_site"}]
    getDataWidget() {
        this.is_loading = true;
        this.engineerPrisReturnItemWidgetService
            .engineerPrisReturnItemWidgetControllerFindAll({
                body: {
                    filter: this.filter,
                    select: [
                        {
                            type: "count",
                            field:"status_engineer_pris_return_item" ,
                            alias: "jumlah" 
                        }
                    ],
                    groupBy:  ['status_engineer_pris_return_item'],
                    sortKey: "status_engineer_pris_return_item",
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
