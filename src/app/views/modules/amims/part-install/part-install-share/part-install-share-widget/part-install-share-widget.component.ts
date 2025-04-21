import { Component, Input, SimpleChanges } from '@angular/core';
import { PartInstallWidgetService } from 'src/sdk/core/services/part-install-widget.service';

@Component({
    selector: 'app-part-install-share-widget',
    templateUrl: './part-install-share-widget.component.html',
    styleUrl: './part-install-share-widget.component.scss'
})
export class PartInstallShareWidgetComponent {
    @Input('filter') filter: any = {};
    @Input('reload') reload: number = 0;
    constructor(
        private partInstallWidgetService: PartInstallWidgetService,
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
    //[{"type":"count","field":"status_part-install_site","alias":"total"}, {"type":"max","field":"status_part-install_site","alias":"status_part-install_site"}]
    getDataWidget() {
        this.is_loading = true;
        this.partInstallWidgetService
            .partInstallWidgetControllerFindAll({
                body: {
                    filter: this.filter,
                    select: [
                        {
                            type: "count",
                            field:"status_part_install" ,
                            alias: "jumlah" 
                        }
                    ],
                    groupBy:  ['status_part_install'],
                    sortKey: "status_part_install",
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
