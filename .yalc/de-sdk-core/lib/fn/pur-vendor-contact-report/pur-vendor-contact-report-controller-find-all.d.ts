import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPurVendorContactReportDto } from '../../models/amims-pur-vendor-contact-report-dto';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
export interface PurVendorContactReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function purVendorContactReportControllerFindAll(http: HttpClient, rootUrl: string, params: PurVendorContactReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsPurVendorContactReportDto>;
    'total'?: number;
}>>;
export declare namespace purVendorContactReportControllerFindAll {
    var PATH: string;
}
