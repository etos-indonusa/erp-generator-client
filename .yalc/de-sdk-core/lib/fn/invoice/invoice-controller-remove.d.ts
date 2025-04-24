import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { PelangganInvoiceDto } from '../../models/pelanggan-invoice-dto';
export interface InvoiceControllerRemove$Params {
    id: string;
}
export declare function invoiceControllerRemove(http: HttpClient, rootUrl: string, params: InvoiceControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: PelangganInvoiceDto;
}>>;
export declare namespace invoiceControllerRemove {
    var PATH: string;
}
