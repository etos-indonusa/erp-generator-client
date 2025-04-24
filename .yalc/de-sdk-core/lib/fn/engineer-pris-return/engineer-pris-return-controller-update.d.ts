import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsEngineerPrisReturnDto } from '../../models/amims-engineer-pris-return-dto';
export interface EngineerPrisReturnControllerUpdate$Params {
    id: string;
    body: AmimsEngineerPrisReturnDto;
}
export declare function engineerPrisReturnControllerUpdate(http: HttpClient, rootUrl: string, params: EngineerPrisReturnControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsEngineerPrisReturnDto;
}>>;
export declare namespace engineerPrisReturnControllerUpdate {
    var PATH: string;
}
