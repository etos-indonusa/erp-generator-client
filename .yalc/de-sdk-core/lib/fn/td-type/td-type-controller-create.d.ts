import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsTdTypeDto } from '../../models/amims-td-type-dto';
export interface TdTypeControllerCreate$Params {
    body: AmimsTdTypeDto;
}
export declare function tdTypeControllerCreate(http: HttpClient, rootUrl: string, params: TdTypeControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsTdTypeDto;
}>>;
export declare namespace tdTypeControllerCreate {
    var PATH: string;
}
