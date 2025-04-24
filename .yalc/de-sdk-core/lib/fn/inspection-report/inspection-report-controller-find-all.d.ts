import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsInspectionReportDto } from '../../models/amims-inspection-report-dto';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
export interface InspectionReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function inspectionReportControllerFindAll(http: HttpClient, rootUrl: string, params: InspectionReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsInspectionReportDto>;
    'total'?: number;
}>>;
export declare namespace inspectionReportControllerFindAll {
    var PATH: string;
}
