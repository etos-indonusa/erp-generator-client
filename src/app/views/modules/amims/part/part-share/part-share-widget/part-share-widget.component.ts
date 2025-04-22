import { Component, Input, SimpleChanges } from '@angular/core';
import { PartWidgetService } from 'de-sdk-core/services/part-widget.service';

@Component({
    selector: 'app-part-share-widget',
    templateUrl: './part-share-widget.component.html',
    styleUrl: './part-share-widget.component.scss'
})
export class PartShareWidgetComponent {
    @Input('filter') filter: any = {};
    @Input('reload') reload: number = 0;
    constructor(
        private partWidgetService: PartWidgetService,
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
    //[{"type":"count","field":"status_part_site","alias":"total"}, {"type":"max","field":"status_part_site","alias":"status_part_site"}]
    getDataWidget() {
        this.is_loading = true;
        this.partWidgetService
            .partWidgetControllerFindAll({
                body: {
                    filter: this.filter,
                    select: [
                        {
                            type: "count",
                            field:"status_part" ,
                            alias: "jumlah" 
                        }
                    ],
                    groupBy:  ['status_part'],
                    sortKey: "status_part",
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
