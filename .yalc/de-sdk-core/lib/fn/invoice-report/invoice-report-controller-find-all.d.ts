import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
import { PelangganInvoiceReportDto } from '../../models/pelanggan-invoice-report-dto';
export interface InvoiceReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function invoiceReportControllerFindAll(http: HttpClient, rootUrl: string, params: InvoiceReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<PelangganInvoiceReportDto>;
    'total'?: number;
}>>;
export declare namespace invoiceReportControllerFindAll {
    var PATH: string;
}
