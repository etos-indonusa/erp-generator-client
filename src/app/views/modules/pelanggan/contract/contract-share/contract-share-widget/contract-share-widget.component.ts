import { Component, Input, SimpleChanges } from '@angular/core';
import { ContractWidgetService } from 'src/sdk/core/services/contract-widget.service';

@Component({
    selector: 'app-contract-share-widget',
    templateUrl: './contract-share-widget.component.html',
    styleUrl: './contract-share-widget.component.scss'
})
export class ContractShareWidgetComponent {
    @Input('filter') filter: any = {};
    @Input('reload') reload: number = 0;
    constructor(
        private contractWidgetService: ContractWidgetService,
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
    //[{"type":"count","field":"status_contract_site","alias":"total"}, {"type":"max","field":"status_contract_site","alias":"status_contract_site"}]
    getDataWidget() {
        this.is_loading = true;
        this.contractWidgetService
            .contractWidgetControllerFindAll({
                body: {
                    filter: this.filter,
                    select: [
                        {
                            type: "count",
                            field:"status_contract" ,
                            alias: "jumlah" 
                        }
                    ],
                    groupBy:  ['status_contract'],
                    sortKey: "status_contract",
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
