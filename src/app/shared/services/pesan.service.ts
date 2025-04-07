import { Injectable } from '@angular/core'
import { NzMessageService } from 'ng-zorro-antd/message'

@Injectable({
    providedIn: 'root',
})
export class PesanService {
    constructor(private message: NzMessageService) { }

    pesanWarningForm(type: string): void {
        this.message.create('warning', type)
    }

    pesanBerhasilForm(type: string): void {
        this.message.create('success', type)
    }
    
}
