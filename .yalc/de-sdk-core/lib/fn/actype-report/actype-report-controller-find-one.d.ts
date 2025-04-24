import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsActypeReportDto } from '../../models/amims-actype-report-dto';
export interface ActypeReportControllerFindOne$Params {
    id: string;
}
export declare function actypeReportControllerFindOne(http: HttpClient, rootUrl: string, params: ActypeReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsActypeReportDto;
}>>;
export declare namespace actypeReportControllerFindOne {
    var PATH: string;
}
