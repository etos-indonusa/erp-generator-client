import { Component, Input } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { AclService } from 'src/app/services/acl.service';
import { TokenService } from 'src/app/services/token.service';
import { environment } from 'src/environments/environment.prod'; 
import { AclUsersReportDto } from 'de-sdk-core';
import { UsersReportService } from 'de-sdk-core';

@Component({
    selector: 'app-users-share-detail',
    templateUrl: './users-share-detail.component.html',
    styleUrl: './users-share-detail.component.scss'
})
export class UsersShareDetailComponent { 
    @Input('idUsers') idUsers: string // replace dengan id+Nama
    constructor(
        private usersReportService: UsersReportService,

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
    users: AclUsersReportDto | null = null; //nanti dinamis dari reportDto

    getData() {
        this.is_loading = true;
        this.usersReportService.usersReportControllerFindOne({ id: this.idUsers }).subscribe(
            data => {
                this.users = data.data || null;
                this.is_loading = false;
                this.reload++
            },
            err => {
                this.is_loading = false;
            }
        )
    }

    // artinya one to many 
    getListData()
    {

    }

    // handleApprovalSubmit(event: { status: 'approve' | 'reject', note: string }) {
    //     console.log('✔ Approval submitted:', event);
    // }

    // refreshApprovalSteps() {
    //     console.log('🔁 Refreshing approval widget...');
    //     // nanti bisa refresh steps/log, kalau sudah connect ke backend
    // }

    print() {
    let url = environment.srv_document + '/pdf/users/' + this.idUsers + '?token=' + this.tokenService.getToken();
        window.open(url, "_blank");
    }

}
