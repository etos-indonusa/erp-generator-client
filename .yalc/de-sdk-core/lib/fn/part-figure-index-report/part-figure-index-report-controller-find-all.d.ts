import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPartFigureIndexReportDto } from '../../models/amims-part-figure-index-report-dto';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
export interface PartFigureIndexReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function partFigureIndexReportControllerFindAll(http: HttpClient, rootUrl: string, params: PartFigureIndexReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsPartFigureIndexReportDto>;
    'total'?: number;
}>>;
export declare namespace partFigureIndexReportControllerFindAll {
    var PATH: string;
}
