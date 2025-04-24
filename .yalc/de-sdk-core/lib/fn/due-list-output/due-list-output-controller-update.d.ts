import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsDueListOutputDto } from '../../models/amims-due-list-output-dto';
export interface DueListOutputControllerUpdate$Params {
    id: string;
    body: AmimsDueListOutputDto;
}
export declare function dueListOutputControllerUpdate(http: HttpClient, rootUrl: string, params: DueListOutputControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsDueListOutputDto;
}>>;
export declare namespace dueListOutputControllerUpdate {
    var PATH: string;
}
