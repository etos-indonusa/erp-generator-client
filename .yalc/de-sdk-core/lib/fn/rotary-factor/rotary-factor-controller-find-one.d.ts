import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsRotaryFactorDto } from '../../models/amims-rotary-factor-dto';
export interface RotaryFactorControllerFindOne$Params {
    id: string;
}
export declare function rotaryFactorControllerFindOne(http: HttpClient, rootUrl: string, params: RotaryFactorControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsRotaryFactorDto;
}>>;
export declare namespace rotaryFactorControllerFindOne {
    var PATH: string;
}
