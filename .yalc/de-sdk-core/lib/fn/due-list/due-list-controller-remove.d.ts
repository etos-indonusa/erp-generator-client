import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsDueListDto } from '../../models/amims-due-list-dto';
export interface DueListControllerRemove$Params {
    id: string;
}
export declare function dueListControllerRemove(http: HttpClient, rootUrl: string, params: DueListControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsDueListDto;
}>>;
export declare namespace dueListControllerRemove {
    var PATH: string;
}
