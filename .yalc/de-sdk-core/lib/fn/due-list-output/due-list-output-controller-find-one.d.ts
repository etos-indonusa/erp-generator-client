import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsDueListOutputDto } from '../../models/amims-due-list-output-dto';
export interface DueListOutputControllerFindOne$Params {
    id: string;
}
export declare function dueListOutputControllerFindOne(http: HttpClient, rootUrl: string, params: DueListOutputControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsDueListOutputDto;
}>>;
export declare namespace dueListOutputControllerFindOne {
    var PATH: string;
}
