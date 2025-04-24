import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsDueListDto } from '../../models/amims-due-list-dto';
export interface DueListControllerUpdate$Params {
    id: string;
    body: AmimsDueListDto;
}
export declare function dueListControllerUpdate(http: HttpClient, rootUrl: string, params: DueListControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsDueListDto;
}>>;
export declare namespace dueListControllerUpdate {
    var PATH: string;
}
