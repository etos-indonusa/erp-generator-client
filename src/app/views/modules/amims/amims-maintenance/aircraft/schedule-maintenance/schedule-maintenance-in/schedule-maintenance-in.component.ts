import { Component, Input, OnChanges } from '@angular/core';

interface SimulasiItem {
    totalDue: number;
    simulated_month: string;
    remaining: number | string;
    [key: string]: any;
}

@Component({
    selector: 'app-schedule-maintenance-in',
    templateUrl: './schedule-maintenance-in.component.html',
    styleUrls: ['./schedule-maintenance-in.component.scss']
})
export class ScheduleMaintenanceInComponent implements OnChanges {
    @Input() data: any[] = [];
    @Input() monthlyData: { [key: string]: string | number } = {};
    @Input() monthLabels: string[] = [];
    @Input() selectedDate: Date[] = [];

    simulatedListGrouped: Record<string, SimulasiItem[]> = {};

    ngOnChanges(): void {
        if (this.data?.length && this.monthLabels?.length) {
            // this.simulatedListGrouped = this.simulateTotalDue(this.data);
            this.simulatedListGrouped = this.simulateTotalDue(this.data); 
            console.log(this.simulatedListGrouped);
        }
    }

    private simulateTotalDue(data: any[]): Record<string, SimulasiItem[]> {
        const result: Record<string, SimulasiItem[]> = {};

        for (const month of this.monthLabels) {
            const simulation = Number(this.monthlyData[month] ?? 0);
            if (simulation <= 0) continue;

            result[month] = [];

            for (const item of data) {
                const type_due = item.type_due?.toUpperCase() ?? '';
                const interval = Number(item.to_due ?? 0);
                let totalDue = 0;
                let remaining: number | string = 0;

                if (type_due === 'HR' || type_due === 'CY') {
                    const current = Number(item.next_at_install ? item.next_at_install : item.current_part ?? 0);

                    const currentMonthIndex = this.monthLabels.findIndex(m => m === month);
                    const { item: prevItem, index: foundIndex } = this.findPrevItemWithIndex(item.id_due_list_output, item.id_part, currentMonthIndex, result, this.monthLabels);

                    const current_live = prevItem?.next_at_install
                        ? prevItem.next_at_install
                        : item.current_part ?? 0;
                    // if (item.id_due_list_output == "54b9da7c-50a4-11f0-a98b-bc24113ec8a0") {
                    //     console.log(`🔍 current: ${current}, month: ${month}, simulation: ${simulation}`);
                    //     console.log(`🔍 current_live: ${current_live
                    //         }, month: ${month}, simulation: ${simulation}`);
                    // }


                    if (interval > 0 && current + simulation >= interval) {
                        const remainingToNextDue = interval - current;
                        const totalDue = 1 + Math.floor((simulation - Math.max(0, remainingToNextDue)) / interval);

                        item.next_at_install = Number(interval - current_live);

                        for (let i = 0; i < totalDue; i++) {
                            const currentPartEach = current + interval * i; // posisi jam saat due
                            const duePoint = currentPartEach + interval;
                            const remainingEach = Math.max(0, duePoint - current);

                            result[month].push({
                                ...item,
                                totalDue: 1,
                                simulated_month: month,
                                remaining: remainingEach,
                                next_at_install: duePoint,
                                current_part: currentPartEach // ✅ Update current_part untuk baris ini
                            });
                        }

                    }


                } else if (type_due === 'DY') {

                    let daysInterval = 0;
                    if (item.variabel === 'YR') {
                        daysInterval = interval * 365.25;
                    } else if (item.variabel === 'MO') {
                        daysInterval = interval * 30.44;
                    } else {
                        daysInterval = interval;
                    }

                    // selisih waktu sekarang 
                    const installDate = new Date(item.at_install);
                    const today = new Date();
                    let seleisih_waktu_sekarang = Math.max(0, Math.ceil((today.getTime() - installDate.getTime()) / (1000 * 3600 * 24)));



                    const startDate = this.selectedDate?.[0] ?? new Date();

                    // Ambil bulan dari label misal 'Jul 2025'
                    const [bulanName, tahunStr] = month.split(' ');
                    const targetMonth = new Date(`${bulanName} 1, ${tahunStr}`);
                    const endOfMonth = new Date(targetMonth.getFullYear(), targetMonth.getMonth() + 1, 0);

                    const currentMonthIndex = this.monthLabels.findIndex(m => m === month);
                    const firstMonthIndex = this.monthLabels.findIndex(m => m === this.monthLabels[0]);

                    const { item: prevItem, index: foundIndex } = this.findPrevItemWithIndex(item.id_due_list_output, item.id_part, currentMonthIndex, result, this.monthLabels);

                    const baseInstallDate = prevItem?.next_at_install
                        ? new Date(prevItem.next_at_install)
                        : new Date(item.at_install);

                    let offsetHari = 0;
                    if (foundIndex !== -1) {
                        // Berarti jaraknya (current - found)
                        const deltaMonth = currentMonthIndex - foundIndex;
                        offsetHari = deltaMonth * 30; // asumsi 30 hari per bulan
                    } else {
                        // fallback ke hitungan normal bulan pertama
                        offsetHari = Math.max(0, (endOfMonth.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
                    }


                    seleisih_waktu_sekarang = prevItem?.next_at_install ? 0 : seleisih_waktu_sekarang;

                    const dueDate = new Date(baseInstallDate);
                    dueDate.setDate(dueDate.getDate() + daysInterval);

                    const future = new Date(baseInstallDate);
                    future.setDate(future.getDate() + offsetHari + seleisih_waktu_sekarang);

                    let targetMonthEnd = new Date(future.getFullYear(), future.getMonth() + 1, 0);
                    targetMonthEnd = new Date(targetMonthEnd); // langsung ke akhir bulan

                    // if (item.id_due_list_output == "5ae3b129-50a4-11f0-a98b-bc24113ec8a0") {
                    //     // console.log(`🔍 Base Install Date for ${item.part_number}:`, baseInstallDate.toISOString().slice(0, 10));
                    //     console.log(`🔍 dueDate:`, dueDate.toISOString().slice(0, 10));
                    //     console.log(`🔍 baseInstallDate:`, baseInstallDate.toISOString().slice(0, 10));
                    //     console.log(`🔍 future:`, future.toISOString().slice(0, 10));
                    //     console.log(`🔍 targetMonthEnd:`, targetMonthEnd.toISOString().slice(0, 10));
                    // }


                    if (targetMonthEnd >= dueDate) {
                        const diffDays = Math.floor((targetMonthEnd.getTime() - dueDate.getTime()) / (1000 * 60 * 60 * 24));
                        totalDue = 1 + Math.floor(diffDays / daysInterval);
                        remaining = 'By date';

                        // ✅ Loop multiple entries
                        for (let i = 0; i < totalDue; i++) {
                            const currentPartEach = new Date(baseInstallDate);
                            currentPartEach.setDate(currentPartEach.getDate() + daysInterval * i);

                            const dueDateEach = new Date(baseInstallDate);
                            dueDateEach.setDate(dueDateEach.getDate() + daysInterval * (i + 1));

                            result[month].push({
                                ...item,
                                totalDue: 1,
                                simulated_month: month,
                                remaining: 'By date',
                                current_part: currentPartEach.toISOString().slice(0, 10), // ✅ posisi tanggal berjalan
                                next_at_install: dueDateEach.toISOString().slice(0, 10)    // ✅ tanggal due berikutnya
                            });
                        }
                    } else {
                        const daysRemain = Math.ceil((dueDate.getTime() - future.getTime()) / (1000 * 60 * 60 * 24));
                        remaining = daysRemain;

                        // ✅ Tetap pakai struktur yang sama
                        // result[month].push({
                        //     ...item,
                        //     totalDue: 1,
                        //     simulated_month: month,
                        //     remaining: daysRemain,
                        //     current_part: baseInstallDate.toISOString().slice(0, 10), // posisi sekarang
                        //     next_at_install: dueDate.toISOString().slice(0, 10)        // due berikutnya
                        // });
                    }

                    // Simpan next_at_install untuk bulan berikutnya

                    // Hitung next due date murni sesuai interval
                    const nextDueDate = new Date(baseInstallDate);
                    nextDueDate.setDate(nextDueDate.getDate() + daysInterval);

                    item.next_at_install = nextDueDate.toISOString().slice(0, 10);

                    // console.log(`🔍 ${month}: at_install + ${totalOffset} + ${simulation} → future=${future.toISOString().slice(0, 10)}, due=${dueDate.toISOString().slice(0, 10)}`);
                }

                // if (totalDue > 0) {
                //     result[month].push({
                //         ...item,
                //         totalDue,
                //         simulated_month: month,
                //         remaining
                //     });
                // }
            }
        }

        return result;
    }

    // private simulateTotalDue(data: any[]): Record<string, SimulasiItem[]> {
    //     const result: Record<string, SimulasiItem[]> = {};

    //     for (const month of this.monthLabels) {
    //         const simulation = Number(this.monthlyData[month] ?? 0);
    //         if (simulation <= 0) continue;

    //         result[month] = [];

    //         for (const item of data) {
    //             const type_due = item.type_due?.toUpperCase() ?? '';
    //             const interval = Number(item.to_due ?? 0);
    //             let totalDue = 0;
    //             let remaining: number | string = 0;

    //             if (type_due === 'HR' || type_due === 'CY') {
    //                 const current = Number(item.next_at_install ? item.next_at_install : item.current_part ?? 0);

    //                 const currentMonthIndex = this.monthLabels.findIndex(m => m === month);
    //                 const { item: prevItem, index: foundIndex } = this.findPrevItemWithIndex(item.id_due_list_output, item.id_part, currentMonthIndex, result, this.monthLabels);

    //                 const current_live = prevItem?.next_at_install
    //                     ? prevItem.next_at_install
    //                     : item.current_part ?? 0;
    //                 // if (item.id_due_list_output == "54b9da7c-50a4-11f0-a98b-bc24113ec8a0") {
    //                 //     console.log(`🔍 current: ${current}, month: ${month}, simulation: ${simulation}`);
    //                 //     console.log(`🔍 current_live: ${current_live
    //                 //         }, month: ${month}, simulation: ${simulation}`);
    //                 // }


    //                 if (interval > 0 && current + simulation >= interval) {
    //                     if (item.id_due_list_output == "54b9da7c-50a4-11f0-a98b-bc24113ec8a0") {
    //                         console.log(`🔍 current: ${current}, month: ${month}, simulation: ${simulation}`);
    //                         console.log(`🔍 current_live: ${current_live
    //                             }, month: ${month}, simulation: ${simulation}`);
    //                     }

    //                     const remainingToNextDue = interval - current;
    //                     totalDue = 1 + Math.floor((simulation - Math.max(0, remainingToNextDue)) / interval);
    //                     remaining = Math.max(0, interval - (current + simulation));

    //                     item.next_at_install = Number(interval - current_live)
    //                 }

    //             } else if (type_due === 'DY') {

    //                 let daysInterval = 0;
    //                 if (item.variabel === 'YR') {
    //                     daysInterval = interval * 365.25;
    //                 } else if (item.variabel === 'MO') {
    //                     daysInterval = interval * 30.44;
    //                 } else {
    //                     daysInterval = interval;
    //                 }

    //                 // selisih waktu sekarang 
    //                 const installDate = new Date(item.at_install);
    //                 const today = new Date();
    //                 let seleisih_waktu_sekarang = Math.max(0, Math.ceil((today.getTime() - installDate.getTime()) / (1000 * 3600 * 24)));



    //                 const startDate = this.selectedDate?.[0] ?? new Date();

    //                 // Ambil bulan dari label misal 'Jul 2025'
    //                 const [bulanName, tahunStr] = month.split(' ');
    //                 const targetMonth = new Date(`${bulanName} 1, ${tahunStr}`);
    //                 const endOfMonth = new Date(targetMonth.getFullYear(), targetMonth.getMonth() + 1, 0);

    //                 const currentMonthIndex = this.monthLabels.findIndex(m => m === month);
    //                 const firstMonthIndex = this.monthLabels.findIndex(m => m === this.monthLabels[0]);

    //                 const { item: prevItem, index: foundIndex } = this.findPrevItemWithIndex(item.id_due_list_output, item.id_part, currentMonthIndex, result, this.monthLabels);

    //                 const baseInstallDate = prevItem?.next_at_install
    //                     ? new Date(prevItem.next_at_install)
    //                     : new Date(item.at_install);

    //                 let offsetHari = 0;
    //                 if (foundIndex !== -1) {
    //                     // Berarti jaraknya (current - found)
    //                     const deltaMonth = currentMonthIndex - foundIndex;
    //                     offsetHari = deltaMonth * 30; // asumsi 30 hari per bulan
    //                 } else {
    //                     // fallback ke hitungan normal bulan pertama
    //                     offsetHari = Math.max(0, (endOfMonth.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
    //                 }


    //                 seleisih_waktu_sekarang = prevItem?.next_at_install ? 0 : seleisih_waktu_sekarang;

    //                 const dueDate = new Date(baseInstallDate);
    //                 dueDate.setDate(dueDate.getDate() + daysInterval);

    //                 const future = new Date(baseInstallDate);
    //                 future.setDate(future.getDate() + offsetHari + seleisih_waktu_sekarang);

    //                 let targetMonthEnd = new Date(future.getFullYear(), future.getMonth() + 1, 0);
    //                 targetMonthEnd = new Date(targetMonthEnd); // langsung ke akhir bulan

    //                 // if (item.id_due_list_output == "5ae3b129-50a4-11f0-a98b-bc24113ec8a0") {
    //                 //     // console.log(`🔍 Base Install Date for ${item.part_number}:`, baseInstallDate.toISOString().slice(0, 10));
    //                 //     console.log(`🔍 dueDate:`, dueDate.toISOString().slice(0, 10));
    //                 //     console.log(`🔍 baseInstallDate:`, baseInstallDate.toISOString().slice(0, 10));
    //                 //     console.log(`🔍 future:`, future.toISOString().slice(0, 10));
    //                 //     console.log(`🔍 targetMonthEnd:`, targetMonthEnd.toISOString().slice(0, 10));
    //                 // }


    //                 if (targetMonthEnd >= dueDate) {
    //                     const diffDays = Math.floor((targetMonthEnd.getTime() - dueDate.getTime()) / (1000 * 60 * 60 * 24));
    //                     totalDue = 1 + Math.floor(diffDays / daysInterval);
    //                     remaining = 'By date';
    //                 } else {
    //                     const daysRemain = Math.ceil((dueDate.getTime() - future.getTime()) / (1000 * 60 * 60 * 24));
    //                     remaining = daysRemain;
    //                 }

    //                 // Simpan next_at_install untuk bulan berikutnya

    //                 // Hitung next due date murni sesuai interval
    //                 const nextDueDate = new Date(baseInstallDate);
    //                 nextDueDate.setDate(nextDueDate.getDate() + daysInterval);

    //                 item.next_at_install = nextDueDate.toISOString().slice(0, 10);

    //                 // console.log(`🔍 ${month}: at_install + ${totalOffset} + ${simulation} → future=${future.toISOString().slice(0, 10)}, due=${dueDate.toISOString().slice(0, 10)}`);
    //             }

    //             if (totalDue > 0) {
    //                 result[month].push({
    //                     ...item,
    //                     totalDue,
    //                     simulated_month: month,
    //                     remaining
    //                 });
    //             }
    //         }
    //     }

    //     return result;
    // }

 


    findPrevItemWithIndex(
        id_due_list_output: string,
        id_part: string,
        currentIndex: number,
        result: any,
        monthLabels: string[]
    ): { item: any, index: number } {

        for (let i = currentIndex - 1; i >= 0; i--) {
            const month = monthLabels[i];
            const foundItems = result?.[month]?.filter((x: any) =>
                x.id_due_list_output === id_due_list_output && x.id_part === id_part
            );

            if (foundItems && foundItems.length > 0) {
                // ✅ Ambil item terakhir
                const lastItem = foundItems[foundItems.length - 1];
                return { item: lastItem, index: i };
            }
        }
        return { item: null, index: -1 };
    }

    listOfColumn = [
        {
            title: 'Keyword',
            compare: (a: any, b: any) => (a.keyword ?? '').localeCompare(b.keyword ?? ''),
            priority: 3,
            width: '10%'
        },
        {
            title: 'Part Number',
            compare: (a: any, b: any) => (a.part_number ?? '').localeCompare(b.part_number ?? ''),
            priority: 2,
            width: '10%'
        },
        {
            title: 'SN',
            compare: (a: any, b: any) => (a.sn ?? '').localeCompare(b.sn ?? ''),
            priority: 2,
            width: '10%'
        },
        {
            title: 'Interval',
            compare: (a: any, b: any) => Number(a.to_due ?? 0) - Number(b.to_due ?? 0),
            priority: 1,
            width: '10%'
        },
        {
            title: 'Current',
            compare: (a: any, b: any) => Number(a.current_part ?? 0) - Number(b.current_part ?? 0),
            priority: 4,
            width: '10%'
        },
        {
            title: 'QTY',
            compare: (a: any, b: any) => Number(a.qty ?? 0) - Number(b.qty ?? 0),
            priority: 4,
            width: '5%'
        },
        {
            title: 'Due At',
            compare: (a: any, b: any) => new Date(a.due_at ?? 0).getTime() - new Date(b.due_at ?? 0).getTime(),
            priority: 5,
            width: '10%'
        },
        {
            title: 'Remaining',
            compare: (a: any, b: any) => {
                const valA = isNaN(Number(a.remaining)) ? 0 : Number(a.remaining);
                const valB = isNaN(Number(b.remaining)) ? 0 : Number(b.remaining);
                return valA - valB;
            },
            priority: 6,
            width: '10%'
        }
    ];
}
