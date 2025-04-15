import { Component, Input } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { ApprovalLogsComponent } from '../approval-logs/approval-logs.component';

@Component({
    selector: 'lib-approval-steps',
    templateUrl: './approval-steps.component.html',
    styleUrl: './approval-steps.component.scss'
})
export class ApprovalStepsComponent {
    @Input('for-module-name') moduleName: any = '';
    @Input('for-module-id') moduleId: any = '';

    constructor(
        private nzDrawerService: NzDrawerService
    ) {

    }
    steps: any[] = [];
    index = 0;

    ngOnInit(): void {
        this.loadDummy();
    }

    loadDummy() {
        this.steps = [
            {
                nama_step: 'Draft',
                status: 'finish',
                subtitle: '2025-04-10 10:00',
                deskripsi: 'Otomatis oleh sistem',
            },
            {
                nama_step: 'Manager Approval',
                status: 'finish',
                subtitle: '2025-04-10 10:05',
                deskripsi: 'Disetujui oleh Manager A',
            },
            {
                nama_step: 'Finance Approval',
                status: 'process',
                subtitle: '2025-04-10 10:10',
                deskripsi: 'Menunggu persetujuan Finance',
            },
            {
                nama_step: 'Final',
                status: 'wait',
                subtitle: '',
                deskripsi: '',
            }
        ];

        this.index = this.steps.findIndex(x => x.status === 'process' || x.status === 'wait');
    }

    onIndexChange(i: number): void {
        this.index = i;
        this.detail()
    }

    getNzStatus(status: string): 'wait' | 'process' | 'finish' | 'error' {
        const valid = ['wait', 'process', 'finish', 'error'] as const;
        return valid.includes(status as any) ? status as any : 'wait';
    }

    detail() {
        const drawerRef = this.nzDrawerService.create<ApprovalLogsComponent, {}, string>({
            nzTitle: 'Logs',
            nzContent: ApprovalLogsComponent,
            nzWidth: (500) + 'px',
        });

        drawerRef.afterClose.subscribe(() => {

        });
    }
}   
