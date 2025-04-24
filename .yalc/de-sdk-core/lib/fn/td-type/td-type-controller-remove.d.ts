import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsTdTypeDto } from '../../models/amims-td-type-dto';
export interface TdTypeControllerRemove$Params {
    id: string;
}
export declare function tdTypeControllerRemove(http: HttpClient, rootUrl: string, params: TdTypeControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsTdTypeDto;
}>>;
export declare namespace tdTypeControllerRemove {
    var PATH: string;
}
