import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPartInstallDto } from '../../models/amims-part-install-dto';
export interface PartInstallControllerCreate$Params {
    body: AmimsPartInstallDto;
}
export declare function partInstallControllerCreate(http: HttpClient, rootUrl: string, params: PartInstallControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPartInstallDto;
}>>;
export declare namespace partInstallControllerCreate {
    var PATH: string;
}
