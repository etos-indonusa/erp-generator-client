import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPositionDto } from '../../models/amims-position-dto';
export interface PositionControllerCreate$Params {
    body: AmimsPositionDto;
}
export declare function positionControllerCreate(http: HttpClient, rootUrl: string, params: PositionControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPositionDto;
}>>;
export declare namespace positionControllerCreate {
    var PATH: string;
}
