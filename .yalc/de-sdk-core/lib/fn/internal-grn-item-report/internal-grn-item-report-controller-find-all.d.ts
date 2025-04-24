import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsInternalGrnItemReportDto } from '../../models/amims-internal-grn-item-report-dto';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
export interface InternalGrnItemReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function internalGrnItemReportControllerFindAll(http: HttpClient, rootUrl: string, params: InternalGrnItemReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsInternalGrnItemReportDto>;
    'total'?: number;
}>>;
export declare namespace internalGrnItemReportControllerFindAll {
    var PATH: string;
}
