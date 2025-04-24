import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsTdTypeReportDto } from '../../models/amims-td-type-report-dto';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
export interface TdTypeReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function tdTypeReportControllerFindAll(http: HttpClient, rootUrl: string, params: TdTypeReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsTdTypeReportDto>;
    'total'?: number;
}>>;
export declare namespace tdTypeReportControllerFindAll {
    var PATH: string;
}
