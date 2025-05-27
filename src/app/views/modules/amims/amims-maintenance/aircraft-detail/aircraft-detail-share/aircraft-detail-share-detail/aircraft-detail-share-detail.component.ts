import { Component, Input } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { AclService } from 'src/app/services/acl.service';
import { TokenService } from 'src/app/services/token.service';
import { environment } from 'src/environments/environment.prod';
import { AmimsAircraftDetailReportDto } from 'de-sdk-core';
import { AircraftDetailReportService } from 'de-sdk-core';
import { AircraftDetailShareAddComponent } from '../aircraft-detail-share-add/aircraft-detail-share-add.component';

@Component({
    selector: 'app-aircraft-detail-share-detail',
    templateUrl: './aircraft-detail-share-detail.component.html',
    styleUrl: './aircraft-detail-share-detail.component.scss'
})
export class AircraftDetailShareDetailComponent {
    @Input('idAircraftDetail') idAircraftDetail: string // replace dengan id+Nama
    constructor(
        private aircraftDetailReportService: AircraftDetailReportService,

        private acl: AclService,
        private drawerService: NzDrawerService,
        private tokenService: TokenService,

        /* tambahkan disnini untuk sub lainnya */
        /* tambahkan disnini untuk sub lainnya */
    ) { }

    ngOnInit() {
        this.getData();
    }
    reload = 0;
    is_loading: boolean = false;
    aircraftDetail: AmimsAircraftDetailReportDto | null = null; //nanti dinamis dari reportDto

    getData() {
        this.is_loading = true;
        this.aircraftDetailReportService.aircraftDetailReportControllerFindOne({ id: this.idAircraftDetail }).subscribe(
            data => {
                this.aircraftDetail = data.data || null;
                this.is_loading = false;
                this.reload++
            },
            err => {
                this.is_loading = false;
            }
        )
    }

    // artinya one to many 
    getListData() {

    }

    // handleApprovalSubmit(event: { status: 'approve' | 'reject', note: string }) {
    //     console.log('✔ Approval submitted:', event);
    // }

    // refreshApprovalSteps() {
    //     console.log('🔁 Refreshing approval widget...');
    //     // nanti bisa refresh steps/log, kalau sudah connect ke backend
    // }

    print() {
        let url = environment.srv_document + '/pdf/aircraftDetail/' + this.idAircraftDetail + '?token=' + this.tokenService.getToken();
        window.open(url, "_blank");
    }

    add() {
        if (!this.acl.can('aircraft-detail', 'can_add')) return;

        const drawerRef = this.drawerService.create<AircraftDetailShareAddComponent, {}, string>({
            nzTitle: 'Add',
            nzContent: AircraftDetailShareAddComponent,
            nzWidth: (500) + 'px',
            nzContentParams: {
                aircraftDetail: this.aircraftDetail || undefined
            }
        });

        drawerRef.afterClose.subscribe(() => {
            this.getData();
        });
    }


}
