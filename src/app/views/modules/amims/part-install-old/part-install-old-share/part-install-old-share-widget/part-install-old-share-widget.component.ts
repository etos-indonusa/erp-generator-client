import { Component, Input, SimpleChanges } from '@angular/core';
import { PartInstallOldWidgetService } from 'de-sdk-core/lib/services/part-install-old-widget.service';

@Component({
    selector: 'app-part-install-old-share-widget',
    templateUrl: './part-install-old-share-widget.component.html',
    styleUrl: './part-install-old-share-widget.component.scss'
})
export class PartInstallOldShareWidgetComponent {
    @Input('filter') filter: any = {};
    @Input('reload') reload: number = 0;
    constructor(
        private partInstallOldWidgetService: PartInstallOldWidgetService,
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
    //[{"type":"count","field":"status_part-install-old_site","alias":"total"}, {"type":"max","field":"status_part-install-old_site","alias":"status_part-install-old_site"}]
    getDataWidget() {
        this.is_loading = true;
        this.partInstallOldWidgetService
            .partInstallOldWidgetControllerFindAll({
                body: {
                    filter: this.filter,
                    select: [
                        {
                            type: "count",
                            field:"status_part_install_old" ,
                            alias: "jumlah" 
                        }
                    ],
                    groupBy:  ['status_part_install_old'],
                    sortKey: "status_part_install_old",
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
