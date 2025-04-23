import { Component, Input, SimpleChanges } from '@angular/core';
import { PartAlternativeWidgetService } from 'de-sdk-core/lib/services/part-alternative-widget.service';

@Component({
    selector: 'app-part-alternative-share-widget',
    templateUrl: './part-alternative-share-widget.component.html',
    styleUrl: './part-alternative-share-widget.component.scss'
})
export class PartAlternativeShareWidgetComponent {
    @Input('filter') filter: any = {};
    @Input('reload') reload: number = 0;
    constructor(
        private partAlternativeWidgetService: PartAlternativeWidgetService,
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
    //[{"type":"count","field":"status_part-alternative_site","alias":"total"}, {"type":"max","field":"status_part-alternative_site","alias":"status_part-alternative_site"}]
    getDataWidget() {
        this.is_loading = true;
        this.partAlternativeWidgetService
            .partAlternativeWidgetControllerFindAll({
                body: {
                    filter: this.filter,
                    select: [
                        {
                            type: "count",
                            field:"status_part_alternative" ,
                            alias: "jumlah" 
                        }
                    ],
                    groupBy:  ['status_part_alternative'],
                    sortKey: "status_part_alternative",
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
