import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPositionDto } from '../../models/amims-position-dto';
export interface PositionControllerFindOne$Params {
    id: string;
}
export declare function positionControllerFindOne(http: HttpClient, rootUrl: string, params: PositionControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPositionDto;
}>>;
export declare namespace positionControllerFindOne {
    var PATH: string;
}
