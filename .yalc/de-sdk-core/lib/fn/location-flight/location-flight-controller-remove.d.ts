import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsLocationFlightDto } from '../../models/amims-location-flight-dto';
export interface LocationFlightControllerRemove$Params {
    id: string;
}
export declare function locationFlightControllerRemove(http: HttpClient, rootUrl: string, params: LocationFlightControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsLocationFlightDto;
}>>;
export declare namespace locationFlightControllerRemove {
    var PATH: string;
}
