import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'status'
})
export class StatusPipe implements PipeTransform {

    transform(value: any, ...args: any[]): any {
        if (value == 'active') {
            return 'green'
        }
        if (value == 'warning') {
            return 'orange'
        }
        if (value == 'semua') {
            return '#0d6efd'
        }
        if (value == 'open') {
            return 'purple'
        }
        if (value == 'diteruskan') {
            return 'pink'
        }
        if (value == 'followup') {
            return 'orange'
        }
        if (value == 'review') {
            return '#ffc107'
        }
        if (value == 'close') {
            return 'green'
        }
        if (value == 'aman') {
            return 'green'
        }
        if (value == 'rawan') {
            return '#ffc107'
        }
        if (value == 'bahaya') {
            return 'red'
        }
        if (value == 'received') {
            return 'teal'
        }

        if (value == 'confirm') {
            return '#fd7e14'
        }
        if (value == 'approve' || value == 'approved') {
            return '#0dcaf0'
        }
        if (value == 'selesai') {
            return '#20c997'
        }
        if (value == 'Terlambat') {
            return 'red'
        }
        if (value == 'On Schedule') {
            return '#20c997'
        }


        return '#A569BD';
    }

}
