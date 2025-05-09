import { Component, Input, SimpleChanges } from '@angular/core';
import { CurrencyWidgetService } from 'de-sdk-core';

@Component({
    selector: 'app-currency-share-widget',
    templateUrl: './currency-share-widget.component.html',
    styleUrl: './currency-share-widget.component.scss'
})
export class CurrencyShareWidgetComponent {
    @Input('filter') filter: any = {};
    @Input('reload') reload: number = 0;
    constructor(
        private currencyWidgetService: CurrencyWidgetService,
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
    //[{"type":"count","field":"status_currency_site","alias":"total"}, {"type":"max","field":"status_currency_site","alias":"status_currency_site"}]
    getDataWidget() {
        this.is_loading = true;
        this.currencyWidgetService
            .currencyWidgetControllerFindAll({
                body: {
                    filter: this.filter,
                    select: [
                        {
                            type: "count",
                            field:"status_currency" ,
                            alias: "jumlah" 
                        }
                    ],
                    groupBy:  ['status_currency'],
                    sortKey: "status_currency",
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
