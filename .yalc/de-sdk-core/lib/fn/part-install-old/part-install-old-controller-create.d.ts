import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPartInstallOldDto } from '../../models/amims-part-install-old-dto';
export interface PartInstallOldControllerCreate$Params {
    body: AmimsPartInstallOldDto;
}
export declare function partInstallOldControllerCreate(http: HttpClient, rootUrl: string, params: PartInstallOldControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPartInstallOldDto;
}>>;
export declare namespace partInstallOldControllerCreate {
    var PATH: string;
}
