import { Component, Input, SimpleChanges } from '@angular/core';
import { MpartWidgetService } from 'de-sdk-core';

@Component({
    selector: 'app-mpart-share-widget',
    templateUrl: './mpart-share-widget.component.html',
    styleUrl: './mpart-share-widget.component.scss'
})
export class MpartShareWidgetComponent {
    @Input('filter') filter: any = {};
    @Input('reload') reload: number = 0;
    constructor(
        private mpartWidgetService: MpartWidgetService,
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
    //[{"type":"count","field":"status_mpart_site","alias":"total"}, {"type":"max","field":"status_mpart_site","alias":"status_mpart_site"}]
    getDataWidget() {
        this.is_loading = true;
        this.mpartWidgetService
            .mpartWidgetControllerFindAll({
                body: {
                    filter: this.filter,
                    select: [
                        {
                            type: "count",
                            field:"status_mpart" ,
                            alias: "jumlah" 
                        }
                    ],
                    groupBy:  ['status_mpart'],
                    sortKey: "status_mpart",
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
