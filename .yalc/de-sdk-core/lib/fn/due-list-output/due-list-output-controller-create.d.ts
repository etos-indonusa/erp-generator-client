import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsDueListOutputDto } from '../../models/amims-due-list-output-dto';
export interface DueListOutputControllerCreate$Params {
    body: AmimsDueListOutputDto;
}
export declare function dueListOutputControllerCreate(http: HttpClient, rootUrl: string, params: DueListOutputControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsDueListOutputDto;
}>>;
export declare namespace dueListOutputControllerCreate {
    var PATH: string;
}
