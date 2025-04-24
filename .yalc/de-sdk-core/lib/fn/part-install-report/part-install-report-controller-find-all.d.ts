import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPartInstallReportDto } from '../../models/amims-part-install-report-dto';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
export interface PartInstallReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function partInstallReportControllerFindAll(http: HttpClient, rootUrl: string, params: PartInstallReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsPartInstallReportDto>;
    'total'?: number;
}>>;
export declare namespace partInstallReportControllerFindAll {
    var PATH: string;
}
