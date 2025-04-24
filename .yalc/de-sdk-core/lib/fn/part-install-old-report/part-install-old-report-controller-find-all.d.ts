import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPartInstallOldReportDto } from '../../models/amims-part-install-old-report-dto';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
export interface PartInstallOldReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function partInstallOldReportControllerFindAll(http: HttpClient, rootUrl: string, params: PartInstallOldReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsPartInstallOldReportDto>;
    'total'?: number;
}>>;
export declare namespace partInstallOldReportControllerFindAll {
    var PATH: string;
}
