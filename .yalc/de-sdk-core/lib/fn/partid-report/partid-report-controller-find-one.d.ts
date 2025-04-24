import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPartidReportDto } from '../../models/amims-partid-report-dto';
export interface PartidReportControllerFindOne$Params {
    id: string;
}
export declare function partidReportControllerFindOne(http: HttpClient, rootUrl: string, params: PartidReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPartidReportDto;
}>>;
export declare namespace partidReportControllerFindOne {
    var PATH: string;
}
