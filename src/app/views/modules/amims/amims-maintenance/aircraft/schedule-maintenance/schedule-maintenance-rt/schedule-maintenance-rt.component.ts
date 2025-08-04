import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-schedule-maintenance-rt',
    templateUrl: './schedule-maintenance-rt.component.html',
    styleUrl: './schedule-maintenance-rt.component.scss'
})
export class ScheduleMaintenanceRtComponent {
    @Input('data') data: any[] = [];
    @Input('HR') HR: number = 0;
    @Input('DY') DY: number = 0;
    @Input('CY') CY: number = 0;

    ngOnChanges() {
        if (this.data && this.data.length > 0 && this.HR >= 0 && this.DY >= 0 && this.CY >= 0) {
            this.simulatedList = this.simulateTotalDue(this.data);
            console.log(this.simulatedList);
        }
    }

    listOfColumn = [
        {
            title: 'Keyword',
            compare: (a: any, b: any) => a.keyword.localeCompare(b.keyword),
            priority: 3,
            width: '10%'
        },
        {
            title: 'Part Number',
            compare: (a: any, b: any) => a.part_number.localeCompare(b.part_number),
            priority: 2,
            width: '10%'
        },
        {
            title: 'SN',
            compare: (a: any, b: any) => a.sn.localeCompare(b.sn),
            priority: 2,
            width: '10%'
        },
        // {
        //     title: 'Job',
        //     compare: (a: any, b: any) => a.note_due.localeCompare(b.note_due),
        //     priority: 1,
        //     width: '10%'
        // },
        {
            title: 'Interval',
            compare: (a: any, b: any) => a.to_due.localeCompare(b.to_due),
            priority: 1,
            width: '10%'
        },
        {
            title: 'Current',
            compare: (a: any, b: any) => a.current_part - b.current_part,
            priority: 4,
            width: '10%'
        },
        {
            title: 'QTY',
            compare: (a: any, b: any) => a.totalDue - b.totalDue,
            priority: 4,
            width: '5%'
        },
        {
            title: 'Due At',
            compare: (a: any, b: any) => a.due_at - b.due_at,
            priority: 5,
            width: '10%'
        },
        {
            title: 'Remaining',
            compare: (a: any, b: any) => a.ramaining - b.ramaining,
            priority: 6,
            width: '10%'
        }
    ];

    simulatedList: any[] = [];

    simulateTotalDue(masterData: any[]): (any & { totalDue: number })[] {
        return masterData
            .map(item => {
                let current = Number(item.current_part) ?? 0;
                let interval = Number(item.to_due) ?? 0;

                const type_due = item.type_due?.toUpperCase() ?? '';
                let simulation = 0;

                if (type_due === 'HR') {
                    simulation = this.HR; 
                } else if (type_due === 'DY') {
                    simulation = this.DY;
                    current = new Date(item.at_install).getTime(); // Tanggal instalasi
                    let daysInterval = 0;

                    if (item.variabel === 'YR') {
                        daysInterval = interval * 365;
                    } else if (item.variabel === 'MO') {
                        daysInterval = interval * 30;
                    } else {
                        daysInterval = interval; // default dalam hari
                    }

                    const dueDate = new Date(current);
                    dueDate.setDate(dueDate.getDate() + daysInterval);

                    const now = new Date();
                    const future = new Date();
                    future.setDate(future.getDate() + simulation); // simulasi ke depan

                    if (future >= dueDate) {
                        // Hitung berapa kali kena dalam periode simulasi
                        const remaining = Math.max(0, (future.getTime() - dueDate.getTime()) / (1000 * 60 * 60 * 24));
                        const totalDue = 1 + Math.floor(remaining / daysInterval);

                        return {
                            ...item,
                            totalDue
                        };
                    } else {
                        return null;
                    }
                } else if (type_due === 'CY') {
                    simulation = this.CY;
                }

                // HR & CY processing
                let totalDue = 0;
                if (type_due !== 'DY' && interval > 0 && current + simulation >= interval) {
                    console.log('Processing HR or CY:', item);
                    const remainingToNextDue = interval - current;
                    if (remainingToNextDue <= 0) {
                        totalDue = 1 + Math.floor((simulation - Math.abs(remainingToNextDue)) / interval);
                    } else {
                        totalDue = 1 + Math.floor((simulation - remainingToNextDue) / interval);
                    }
                }

                return totalDue > 0 ? { ...item, totalDue } : null;
            })
            .filter(item => item !== null);
    }
}
