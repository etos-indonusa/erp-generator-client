import { Component, Input, SimpleChanges } from '@angular/core';
import { ContractSiteWidgetService } from 'src/sdk/core/services/contract-site-widget.service';

@Component({
    selector: 'app-contract-site-share-widget',
    templateUrl: './contract-site-share-widget.component.html',
    styleUrl: './contract-site-share-widget.component.scss'
})
export class ContractSiteShareWidgetComponent {
    @Input('filter') filter: any = {};
    @Input('reload') reload: number = 0;
    constructor(
        private contractSiteWidgetService: ContractSiteWidgetService,
    ) { }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.reload) {
            if (changes.reload.currentValue != changes.reload.previousValue && changes.reload.currentValue > 1) {
                this.getDataWidget()
            }
        }
    }
 
    ngOnInit(): void {
    }

    breadCrumbItems = [
        { label: 'List', active: false }
    ]
    is_loading: boolean = false
    total: number = 0;
    status_urutan: any[] = []
    //[{"type":"count","field":"status_contract-site_site","alias":"total"}, {"type":"max","field":"status_contract-site_site","alias":"status_contract-site_site"}]
    getDataWidget() {
        this.is_loading = true;
        this.contractSiteWidgetService
            .contractSiteWidgetControllerFindAll({
                body: {
                    filter: JSON.stringify(this.filter),
                    select: [
                        {
                            type: "count",
                            field:"status_contract_site" ,
                            alias: "jumlah" 
                        }
                    ],
                    groupBy:  ['status_contract_site'],
                    sortKey: "status_contract_site",
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
