import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { PelangganInvoiceReportDto } from '../../models/pelanggan-invoice-report-dto';
export interface InvoiceReportControllerFindOne$Params {
    id: string;
}
export declare function invoiceReportControllerFindOne(http: HttpClient, rootUrl: string, params: InvoiceReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: PelangganInvoiceReportDto;
}>>;
export declare namespace invoiceReportControllerFindOne {
    var PATH: string;
}
