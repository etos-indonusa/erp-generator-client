import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { AclService } from 'src/app/services/acl.service';
import { ContractDto } from 'src/sdk/core/models';
import { ContractService } from 'src/sdk/core/services';
import { ContractShareAddComponent } from '../contract-share/contract-share-add/contract-share-add.component';
import { ContractShareDetailComponent } from '../contract-share/contract-share-detail/contract-share-detail.component';

@Component({
    selector: 'app-contract-list',
    templateUrl: './contract-list.component.html',
    styleUrl: './contract-list.component.scss'
})
export class ContractListComponent {
    constructor(
        private activatedRoute: ActivatedRoute,
    ) { }

    ngOnInit(): void {
        // this.id_kantor = this.userInfoService.getUser?.pegawai_aktif?.id_kantor
        this.activatedRoute.queryParamMap.subscribe(
            data => {
                if (data.get('status')) {
                    this.status = data.get('status') == 'semua' ? null : data.get('status');
                }
            }
        )
    }

    status: string | null = null; 
    filter: any = {};
    getFilter($event: any) {
        this.filter = $event;
        this.getReload()
    }

    reload = 1;
    getReload() {
        this.reload = this.reload + 1
    }
}
