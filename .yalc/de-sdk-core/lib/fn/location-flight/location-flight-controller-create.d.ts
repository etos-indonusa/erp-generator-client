import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsLocationFlightDto } from '../../models/amims-location-flight-dto';
export interface LocationFlightControllerCreate$Params {
    body: AmimsLocationFlightDto;
}
export declare function locationFlightControllerCreate(http: HttpClient, rootUrl: string, params: LocationFlightControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsLocationFlightDto;
}>>;
export declare namespace locationFlightControllerCreate {
    var PATH: string;
}
