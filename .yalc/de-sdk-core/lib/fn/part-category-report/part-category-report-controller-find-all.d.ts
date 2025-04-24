import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPartCategoryReportDto } from '../../models/amims-part-category-report-dto';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
export interface PartCategoryReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function partCategoryReportControllerFindAll(http: HttpClient, rootUrl: string, params: PartCategoryReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsPartCategoryReportDto>;
    'total'?: number;
}>>;
export declare namespace partCategoryReportControllerFindAll {
    var PATH: string;
}
