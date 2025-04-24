import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsTypeOfworkReportDto } from '../../models/amims-type-ofwork-report-dto';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
export interface TypeOfworkReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function typeOfworkReportControllerFindAll(http: HttpClient, rootUrl: string, params: TypeOfworkReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsTypeOfworkReportDto>;
    'total'?: number;
}>>;
export declare namespace typeOfworkReportControllerFindAll {
    var PATH: string;
}
