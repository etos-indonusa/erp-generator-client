import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsEngineerPrisReturnItemDto } from '../../models/amims-engineer-pris-return-item-dto';
export interface EngineerPrisReturnItemControllerUpdate$Params {
    id: string;
    body: AmimsEngineerPrisReturnItemDto;
}
export declare function engineerPrisReturnItemControllerUpdate(http: HttpClient, rootUrl: string, params: EngineerPrisReturnItemControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsEngineerPrisReturnItemDto;
}>>;
export declare namespace engineerPrisReturnItemControllerUpdate {
    var PATH: string;
}
