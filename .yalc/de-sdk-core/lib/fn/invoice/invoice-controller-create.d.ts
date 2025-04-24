import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { PelangganInvoiceDto } from '../../models/pelanggan-invoice-dto';
export interface InvoiceControllerCreate$Params {
    body: PelangganInvoiceDto;
}
export declare function invoiceControllerCreate(http: HttpClient, rootUrl: string, params: InvoiceControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: PelangganInvoiceDto;
}>>;
export declare namespace invoiceControllerCreate {
    var PATH: string;
}
