import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsLocationFlightDto } from '../../models/amims-location-flight-dto';
export interface LocationFlightControllerUpdate$Params {
    id: string;
    body: AmimsLocationFlightDto;
}
export declare function locationFlightControllerUpdate(http: HttpClient, rootUrl: string, params: LocationFlightControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsLocationFlightDto;
}>>;
export declare namespace locationFlightControllerUpdate {
    var PATH: string;
}
