import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsDueListOutputDto } from '../../models/amims-due-list-output-dto';
export interface DueListOutputControllerRemove$Params {
    id: string;
}
export declare function dueListOutputControllerRemove(http: HttpClient, rootUrl: string, params: DueListOutputControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsDueListOutputDto;
}>>;
export declare namespace dueListOutputControllerRemove {
    var PATH: string;
}
