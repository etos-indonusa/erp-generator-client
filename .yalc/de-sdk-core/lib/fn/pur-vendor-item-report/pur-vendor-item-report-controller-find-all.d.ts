import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPurVendorItemReportDto } from '../../models/amims-pur-vendor-item-report-dto';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
export interface PurVendorItemReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function purVendorItemReportControllerFindAll(http: HttpClient, rootUrl: string, params: PurVendorItemReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsPurVendorItemReportDto>;
    'total'?: number;
}>>;
export declare namespace purVendorItemReportControllerFindAll {
    var PATH: string;
}
