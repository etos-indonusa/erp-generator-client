import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsAircraftDto } from '../../models/amims-aircraft-dto';
export interface AircraftControllerRemove$Params {
    id: string;
}
export declare function aircraftControllerRemove(http: HttpClient, rootUrl: string, params: AircraftControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsAircraftDto;
}>>;
export declare namespace aircraftControllerRemove {
    var PATH: string;
}
