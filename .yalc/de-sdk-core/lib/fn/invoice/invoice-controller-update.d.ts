import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { PelangganInvoiceDto } from '../../models/pelanggan-invoice-dto';
export interface InvoiceControllerUpdate$Params {
    id: string;
    body: PelangganInvoiceDto;
}
export declare function invoiceControllerUpdate(http: HttpClient, rootUrl: string, params: InvoiceControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: PelangganInvoiceDto;
}>>;
export declare namespace invoiceControllerUpdate {
    var PATH: string;
}
