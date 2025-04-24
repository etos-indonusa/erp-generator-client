import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsInternalGrnReportDto } from '../../models/amims-internal-grn-report-dto';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
export interface InternalGrnReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function internalGrnReportControllerFindAll(http: HttpClient, rootUrl: string, params: InternalGrnReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsInternalGrnReportDto>;
    'total'?: number;
}>>;
export declare namespace internalGrnReportControllerFindAll {
    var PATH: string;
}
