import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsDueListOutputReportDto } from '../../models/amims-due-list-output-report-dto';
export interface DueListOutputReportControllerFindOne$Params {
    id: string;
}
export declare function dueListOutputReportControllerFindOne(http: HttpClient, rootUrl: string, params: DueListOutputReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsDueListOutputReportDto;
}>>;
export declare namespace dueListOutputReportControllerFindOne {
    var PATH: string;
}
