import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsDueListDto } from '../../models/amims-due-list-dto';
export interface DueListControllerFindOne$Params {
    id: string;
}
export declare function dueListControllerFindOne(http: HttpClient, rootUrl: string, params: DueListControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsDueListDto;
}>>;
export declare namespace dueListControllerFindOne {
    var PATH: string;
}
