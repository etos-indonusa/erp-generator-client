import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsTdTypeDto } from '../../models/amims-td-type-dto';
export interface TdTypeControllerFindOne$Params {
    id: string;
}
export declare function tdTypeControllerFindOne(http: HttpClient, rootUrl: string, params: TdTypeControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsTdTypeDto;
}>>;
export declare namespace tdTypeControllerFindOne {
    var PATH: string;
}
