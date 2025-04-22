import { Component, Input, SimpleChanges } from '@angular/core';
import { PartAtaWidgetService } from 'de-sdk-core/services/part-ata-widget.service';

@Component({
    selector: 'app-part-ata-share-widget',
    templateUrl: './part-ata-share-widget.component.html',
    styleUrl: './part-ata-share-widget.component.scss'
})
export class PartAtaShareWidgetComponent {
    @Input('filter') filter: any = {};
    @Input('reload') reload: number = 0;
    constructor(
        private partAtaWidgetService: PartAtaWidgetService,
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
    //[{"type":"count","field":"status_part-ata_site","alias":"total"}, {"type":"max","field":"status_part-ata_site","alias":"status_part-ata_site"}]
    getDataWidget() {
        this.is_loading = true;
        this.partAtaWidgetService
            .partAtaWidgetControllerFindAll({
                body: {
                    filter: this.filter,
                    select: [
                        {
                            type: "count",
                            field:"status_part_ata" ,
                            alias: "jumlah" 
                        }
                    ],
                    groupBy:  ['status_part_ata'],
                    sortKey: "status_part_ata",
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
