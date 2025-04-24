import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPartCategoryReportDto } from '../../models/amims-part-category-report-dto';
export interface PartCategoryReportControllerFindOne$Params {
    id: string;
}
export declare function partCategoryReportControllerFindOne(http: HttpClient, rootUrl: string, params: PartCategoryReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPartCategoryReportDto;
}>>;
export declare namespace partCategoryReportControllerFindOne {
    var PATH: string;
}
