import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsAircraftDto } from '../../models/amims-aircraft-dto';
export interface AircraftControllerFindOne$Params {
    id: string;
}
export declare function aircraftControllerFindOne(http: HttpClient, rootUrl: string, params: AircraftControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsAircraftDto;
}>>;
export declare namespace aircraftControllerFindOne {
    var PATH: string;
}
