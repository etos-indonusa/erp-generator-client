import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPartAlternativeReportDto } from '../../models/amims-part-alternative-report-dto';
export interface PartAlternativeReportControllerFindOne$Params {
    id: string;
}
export declare function partAlternativeReportControllerFindOne(http: HttpClient, rootUrl: string, params: PartAlternativeReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPartAlternativeReportDto;
}>>;
export declare namespace partAlternativeReportControllerFindOne {
    var PATH: string;
}
