import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsRotaryFactorDto } from '../../models/amims-rotary-factor-dto';
export interface RotaryFactorControllerRemove$Params {
    id: string;
}
export declare function rotaryFactorControllerRemove(http: HttpClient, rootUrl: string, params: RotaryFactorControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsRotaryFactorDto;
}>>;
export declare namespace rotaryFactorControllerRemove {
    var PATH: string;
}
