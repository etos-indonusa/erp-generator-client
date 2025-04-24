import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPositionDto } from '../../models/amims-position-dto';
export interface PositionControllerRemove$Params {
    id: string;
}
export declare function positionControllerRemove(http: HttpClient, rootUrl: string, params: PositionControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPositionDto;
}>>;
export declare namespace positionControllerRemove {
    var PATH: string;
}
