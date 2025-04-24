import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsDueListDto } from '../../models/amims-due-list-dto';
export interface DueListControllerCreate$Params {
    body: AmimsDueListDto;
}
export declare function dueListControllerCreate(http: HttpClient, rootUrl: string, params: DueListControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsDueListDto;
}>>;
export declare namespace dueListControllerCreate {
    var PATH: string;
}
