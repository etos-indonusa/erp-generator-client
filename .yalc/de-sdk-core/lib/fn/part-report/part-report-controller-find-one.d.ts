import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPartReportDto } from '../../models/amims-part-report-dto';
export interface PartReportControllerFindOne$Params {
    id: string;
}
export declare function partReportControllerFindOne(http: HttpClient, rootUrl: string, params: PartReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPartReportDto;
}>>;
export declare namespace partReportControllerFindOne {
    var PATH: string;
}
