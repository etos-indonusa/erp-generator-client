import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-approval-logs',
  templateUrl: './approval-logs.component.html',
  styleUrl: './approval-logs.component.scss'
})
export class ApprovalLogsComponent {
    @Input() logs: any[] = [];

    ngOnInit(): void {
        if (!this.logs || this.logs.length === 0) {
            this.logs = this.getDummyLogs(); // buat testing awal
        }
    }

    getDummyLogs() {
        return [
            {
                nama_step: 'Draft',
                tanggal: '2025-04-10 10:00',
                status: 'finish',
                user: 'System',
                catatan: 'Dokumen dibuat oleh sistem'
            },
            {
                nama_step: 'Manager Approval',
                tanggal: '2025-04-10 10:05',
                status: 'finish',
                user: 'Manager A',
                catatan: 'Setuju'
            },
            {
                nama_step: 'Finance',
                tanggal: '2025-04-10 10:10',
                status: 'process',
                user: 'Finance B',
                catatan: 'Menunggu'
            },
            {
                nama_step: 'Final Approval',
                tanggal: '',
                status: 'wait',
                user: '',
                catatan: ''
            }
        ];
    }

    get currentIndex(): number {
        return this.logs.findIndex(x => x.status === 'process' || x.status === 'wait');
    }
}
