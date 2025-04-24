import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsEngineerPrisDto } from '../../models/amims-engineer-pris-dto';
export interface EngineerPrisControllerUpdate$Params {
    id: string;
    body: AmimsEngineerPrisDto;
}
export declare function engineerPrisControllerUpdate(http: HttpClient, rootUrl: string, params: EngineerPrisControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsEngineerPrisDto;
}>>;
export declare namespace engineerPrisControllerUpdate {
    var PATH: string;
}
