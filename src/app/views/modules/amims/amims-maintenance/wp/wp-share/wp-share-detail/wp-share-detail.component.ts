import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { AclService } from 'src/app/services/acl.service';
import { TokenService } from 'src/app/services/token.service';
import { environment } from 'src/environments/environment.prod';
import {   AmimsWpReportDto } from 'de-sdk-core';
import { WpReportService } from 'de-sdk-core';
import { WpShareAddComponent } from '../wp-share-add/wp-share-add.component';

@Component({
    selector: 'app-wp-share-detail',
    templateUrl: './wp-share-detail.component.html',
    styleUrl: './wp-share-detail.component.scss'
})
export class WpShareDetailComponent { 
    @Input('idWp') idWp: string // replace dengan id+Nama
    constructor(
        private wpReportService: WpReportService,

        private acl: AclService,
        private drawerService: NzDrawerService,
        private cd: ChangeDetectorRef,
        private tokenService: TokenService,

        /* tambahkan disnini untuk sub lainnya */
        /* tambahkan disnini untuk sub lainnya */
    ) { }

    ngOnInit() {
        this.getData();
    }
    reload = 0;
    is_loading: boolean = false;
    wp: AmimsWpReportDto | null = null; //nanti dinamis dari reportDto

    getData() {
        this.is_loading = true;
        this.wpReportService.wpReportControllerFindOne({ id: this.idWp }).subscribe(
            data => {
                this.wp = data.data || null;
                this.is_loading = false;
                this.reload++
                this.cd.detectChanges(); // force change detection to update the view
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
    update()
    {
    const drawerRef = this.drawerService.create <WpShareAddComponent, {}, string > ({
        nzTitle: 'Detail',
        nzContent: WpShareAddComponent,
        nzWidth: (500) + 'px',
            nzContentParams: {
                wp: this.wp || undefined
    }
});

drawerRef.afterClose.subscribe(() => {
    this.getData();
});
    }

    // handleApprovalSubmit(event: { status: 'approve' | 'reject', note: string }) {
    //     console.log('✔ Approval submitted:', event);
    // }

    // refreshApprovalSteps() {
    //     console.log('🔁 Refreshing approval widget...');
    //     // nanti bisa refresh steps/log, kalau sudah connect ke backend
    // }

    print() {
    let url = environment.srv_document + '/pdf/wp/' + this.idWp + '?token=' + this.tokenService.getToken();
        window.open(url, "_blank");
    }

}
