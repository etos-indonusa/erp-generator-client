import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsDueListReportDto } from '../../models/amims-due-list-report-dto';
export interface DueListReportControllerFindOne$Params {
    id: string;
}
export declare function dueListReportControllerFindOne(http: HttpClient, rootUrl: string, params: DueListReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsDueListReportDto;
}>>;
export declare namespace dueListReportControllerFindOne {
    var PATH: string;
}
