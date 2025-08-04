import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { AircraftReportService, DueListOutputReportService } from 'de-sdk-core';

@Component({
    selector: 'app-schedule-maintenance',
    templateUrl: './schedule-maintenance.component.html',
    styleUrl: './schedule-maintenance.component.scss'
})
export class ScheduleMaintenanceComponent {
    constructor(
        private activatedRoute: ActivatedRoute,
        private aircraftReportService: AircraftReportService,
        private dueListOutputReportService: DueListOutputReportService,
    ) { }
    id_aicraft: any = null
    ngOnInit(): void {
        this.activatedRoute.paramMap.subscribe(
            data => {
                if (data.get('id_aicraft')) {
                    this.id_aicraft = data.get('id_aicraft');
                    console.log(this.id_aicraft)
                    this.getData();
                }
            }
        );
        this.generateMonthRange();
    }


    aircrafts: any = {};
    due_list_master: any[] = [];
    getData() {
        this.aircraftReportService.aircraftReportControllerFindOne({ id: this.id_aicraft }).subscribe(
            data => {
                this.aircrafts = data.data;

            }
        )
        this.dueListOutputReportService.dueListOutputReportControllerFindAll({ 
            body: {
                filter: {
                    idAircraft: this.id_aicraft,
                },
                joinWhere: [
                    {
                        "part_install": {
                            "id_aircraft": this.id_aicraft
                        }, type: 'wherein'
                    }
                ],
                // search_field: this.search_field,
                // search_keyword: this.search || undefined,
                include: [
                    {
                        "name": "part",
                        "type": "single"
                    }
                ], 
                // sortKey: this.sortKey ?? undefined,
                // sortValue: this.validSortValue,
                // pageIndex: this.pageIndex,
                // pageSize: this.pageSize
            }
         }).subscribe(
            data => {
                 this.due_list_master = data.data || [];
                this.generateMonthRange();
            }
        );
    }

    tableData = {
        cycles: { tsn: 500, tso: 500 },
        hours: { tsn: 1000, tso: 1000 }
    };
    kursOptions = ['USD', 'EUR', 'IDR'];
    selectedDate: [Date, Date] = this.getDefaultDateRange();

    getDefaultDateRange(): [Date, Date] {
        const today = new Date();
        const nextYear = new Date(today);
        nextYear.setMonth(nextYear.getMonth() + 11); // 11 bulan ke depan berarti total 12 bulan termasuk bulan ini

        return [today, nextYear];
    }
    monthLabels: string[] = [];

    generateMonthRange() {
        const [start, end] = this.selectedDate;
        const months: string[] = [];
        const editableFlags: boolean[] = [];

        const startDate = new Date(start.getFullYear(), start.getMonth(), 1);
        const endDate = new Date(end.getFullYear(), end.getMonth(), 1);
        const now = new Date(); // tanggal hari ini
        const currentMonth = new Date(now.getFullYear(), now.getMonth(), 1);

        let current = new Date(startDate);

        while (current <= endDate && months.length < 12) {
            const label = current.toLocaleString('default', { month: 'short' }) + ' ' + current.getFullYear().toString().slice(-2);
            months.push(label);

            // cek apakah bulan saat ini atau setelah sekarang
            editableFlags.push(current >= currentMonth);

            current.setMonth(current.getMonth() + 1);
        }

        this.monthLabels = months;
        this.editable = editableFlags;
    }
    editable: boolean[] = [];
    monthlyData: { [key: string]: string | number } = {};

    onDateRangeChange() {
        this.generateMonthRange();
        const [start, end] = this.selectedDate || [];

        // if (start && end) {
        //     // Buat tanggal awal (pukul 00:00:00) dan akhir (pukul 23:59:59)
        //     const startDate = new Date(start.getFullYear(), start.getMonth(), 1);
        //     const endDate = new Date(end.getFullYear(), end.getMonth() + 1, 0); // hari terakhir bulan tersebut

        //     // Hitung jumlah hari total
        //     const daysDiff =
        //         (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24) + 1;

        //     console.log('Total Hari:', daysDiff);
        //     this.simulasiHari = daysDiff
        // }
    }
    getLastFilledMonthIndex(values: number[]): number {
        for (let i = values.length - 1; i >= 0; i--) {
            if (values[i] && values[i] > 0) return i;
        }
        return -1;
    }
    getTotal(values: number[]): number {
        return values.reduce((acc, val) => acc + (val || 0), 0);
    }

    get total(): number {
        return 0;
    }

    selectedSort = 'Ordered';
    sortOptions = ['Ordered', 'Date', 'Priority'];

    partList = [
        { description: 'Hose, Float', partNumber: '70-072L000B204', serialNumber: '123412', qty: 1, uom: 'EA', inStock: '1 BAG', partProgram: 'NO', remaining: '25 Mar 2024' },
        { description: 'Hose, Float', partNumber: '70-072L000B204', serialNumber: '123412', qty: 10, uom: 'EA', inStock: '7 EA', partProgram: 'NO', remaining: '25 Mar 2024' },
        { description: 'Hose, Transmission', partNumber: '70-072L000B204', serialNumber: '123412', qty: 1, uom: 'EA', inStock: '1 EA', partProgram: 'NO', remaining: '25 Mar 2024' },
        { description: 'Hose, Transmission', partNumber: '70-072L000B204', serialNumber: '123412', qty: 5, uom: 'EA', inStock: '-', partProgram: 'PBH', remaining: '25 Mar 2024' }
    ];

    // SIMULASI 
    simulasiJam = 0;
    simulasiHari = 0;
    simulasiCycle = 0;
    dataFiltered: { RT: any[]; OH: any[]; IN: any[] } = {
        RT: [],
        OH: [],
        IN: []
    };

    runSimulasi() {
        const result: { RT: any[]; OH: any[]; IN: any[] } = {
            RT: [],
            OH: [],
            IN: []
        };

        for (const part of this.due_list_master) {
            const afterSimulasi = part.current_part + this.simulasiJam;
            const kena = afterSimulasi >= part.due_at;

            const item = {
                ...part,
                afterSimulasi,
                kena
            };

            const code = part.code as 'RT' | 'OH' | 'IN';
            if (result[code]) {
                result[code].push(item);
            }
        }
        console.log('result',result);
        this.dataFiltered = result;

        // AMBIL PERIODE SIMULASI 
        const monthlyValues: number[] = this.monthLabels.map(label => {
            const value = this.monthlyData[label];
            return typeof value === 'number' ? value : parseFloat(value as string) || 0;
        });

        // Total jam
        this.simulasiJam = monthlyValues.reduce((acc, val) => acc + (val || 0), 0);

        // Hitung index bulan terakhir yang punya nilai
        const lastIndex = this.getLastFilledMonthIndex(monthlyValues);
        if (lastIndex !== -1) {
            const [start, end] = this.selectedDate ?? [];

            const startYear = start?.getFullYear() ?? new Date().getFullYear();
            const startMonth = start?.getMonth() ?? 0; // 0 = Januari

            const lastMonth = startMonth + lastIndex;

            // Buat tanggal akhir bulan
            const lastDate = new Date(startYear, lastMonth + 1, 0); // hari ke-0 bulan berikutnya = akhir bulan

            // Hitung selisih hari dari hari ini ke akhir bulan tersebut
            const now = new Date();
            const diffTime = lastDate.getTime() - now.getTime();
            this.simulasiHari = Math.max(Math.ceil(diffTime / (1000 * 3600 * 24)), 0);
        } else {
            this.simulasiHari = 0;
        }

        console.log('simulasiHari:', this.simulasiHari);
    }

    
}
