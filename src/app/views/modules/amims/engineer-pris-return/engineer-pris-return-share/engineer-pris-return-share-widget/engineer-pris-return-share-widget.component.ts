import { Component, Input, SimpleChanges } from '@angular/core';
import { EngineerPrisReturnWidgetService } from 'de-sdk-core';

@Component({
    selector: 'app-engineer-pris-return-share-widget',
    templateUrl: './engineer-pris-return-share-widget.component.html',
    styleUrl: './engineer-pris-return-share-widget.component.scss'
})
export class EngineerPrisReturnShareWidgetComponent {
    @Input('filter') filter: any = {};
    @Input('reload') reload: number = 0;
    constructor(
        private engineerPrisReturnWidgetService: EngineerPrisReturnWidgetService,
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
    //[{"type":"count","field":"status_engineer-pris-return_site","alias":"total"}, {"type":"max","field":"status_engineer-pris-return_site","alias":"status_engineer-pris-return_site"}]
    getDataWidget() {
        this.is_loading = true;
        this.engineerPrisReturnWidgetService
            .engineerPrisReturnWidgetControllerFindAll({
                body: {
                    filter: this.filter,
                    select: [
                        {
                            type: "count",
                            field:"status_engineer_pris_return" ,
                            alias: "jumlah" 
                        }
                    ],
                    groupBy:  ['status_engineer_pris_return'],
                    sortKey: "status_engineer_pris_return",
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
