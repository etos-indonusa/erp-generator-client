import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsLocationFlightDto } from '../../models/amims-location-flight-dto';
export interface LocationFlightControllerFindOne$Params {
    id: string;
}
export declare function locationFlightControllerFindOne(http: HttpClient, rootUrl: string, params: LocationFlightControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsLocationFlightDto;
}>>;
export declare namespace locationFlightControllerFindOne {
    var PATH: string;
}
