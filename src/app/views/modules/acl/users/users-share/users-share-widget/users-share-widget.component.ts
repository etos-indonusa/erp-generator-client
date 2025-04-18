import { Component, Input, SimpleChanges } from '@angular/core';
import { UsersWidgetService } from 'src/sdk/core/services/users-widget.service';

@Component({
    selector: 'app-users-share-widget',
    templateUrl: './users-share-widget.component.html',
    styleUrl: './users-share-widget.component.scss'
})
export class UsersShareWidgetComponent {
    @Input('filter') filter: any = {};
    @Input('reload') reload: number = 0;
    constructor(
        private usersWidgetService: UsersWidgetService,
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
    //[{"type":"count","field":"status_site","alias":"total"}, {"type":"max","field":"status_site","alias":"status_site"}]
    getDataWidget() {
        this.is_loading = true;
        this.usersWidgetService
            .usersWidgetControllerFindAll({
                body: {
                    filter: this.filter,
                    select: [
                        {
                            type: "count",
                            field:"status" ,
                            alias: "jumlah" 
                        }
                    ],
                    groupBy:  ['status'],
                    sortKey: "status",
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
