import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPurVendorReportDto } from '../../models/amims-pur-vendor-report-dto';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
export interface PurVendorReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function purVendorReportControllerFindAll(http: HttpClient, rootUrl: string, params: PurVendorReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsPurVendorReportDto>;
    'total'?: number;
}>>;
export declare namespace purVendorReportControllerFindAll {
    var PATH: string;
}
