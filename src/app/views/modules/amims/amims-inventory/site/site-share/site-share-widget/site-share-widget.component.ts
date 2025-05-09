import { Component, Input, SimpleChanges } from '@angular/core';
import { SiteWidgetService } from 'de-sdk-core';

@Component({
    selector: 'app-site-share-widget',
    templateUrl: './site-share-widget.component.html',
    styleUrl: './site-share-widget.component.scss'
})
export class SiteShareWidgetComponent {
    @Input('filter') filter: any = {};
    @Input('reload') reload: number = 0;
    constructor(
        private siteWidgetService: SiteWidgetService,
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
    //[{"type":"count","field":"status_site_site","alias":"total"}, {"type":"max","field":"status_site_site","alias":"status_site_site"}]
    getDataWidget() {
        this.is_loading = true;
        this.siteWidgetService
            .siteWidgetControllerFindAll({
                body: {
                    filter: this.filter,
                    select: [
                        {
                            type: "count",
                            field:"status_site" ,
                            alias: "jumlah" 
                        }
                    ],
                    groupBy:  ['status_site'],
                    sortKey: "status_site",
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
