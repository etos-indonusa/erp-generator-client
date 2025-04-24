import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { PelangganInvoiceDto } from '../../models/pelanggan-invoice-dto';
export interface InvoiceControllerFindOne$Params {
    id: string;
}
export declare function invoiceControllerFindOne(http: HttpClient, rootUrl: string, params: InvoiceControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: PelangganInvoiceDto;
}>>;
export declare namespace invoiceControllerFindOne {
    var PATH: string;
}
