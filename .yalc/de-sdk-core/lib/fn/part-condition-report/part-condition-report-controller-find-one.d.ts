import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPartConditionReportDto } from '../../models/amims-part-condition-report-dto';
export interface PartConditionReportControllerFindOne$Params {
    id: string;
}
export declare function partConditionReportControllerFindOne(http: HttpClient, rootUrl: string, params: PartConditionReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPartConditionReportDto;
}>>;
export declare namespace partConditionReportControllerFindOne {
    var PATH: string;
}
