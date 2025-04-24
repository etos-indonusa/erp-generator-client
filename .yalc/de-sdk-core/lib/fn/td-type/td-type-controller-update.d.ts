import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsTdTypeDto } from '../../models/amims-td-type-dto';
export interface TdTypeControllerUpdate$Params {
    id: string;
    body: AmimsTdTypeDto;
}
export declare function tdTypeControllerUpdate(http: HttpClient, rootUrl: string, params: TdTypeControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsTdTypeDto;
}>>;
export declare namespace tdTypeControllerUpdate {
    var PATH: string;
}
