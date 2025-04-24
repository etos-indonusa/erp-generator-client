import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPartInstallOldDto } from '../../models/amims-part-install-old-dto';
export interface PartInstallOldControllerUpdate$Params {
    id: string;
    body: AmimsPartInstallOldDto;
}
export declare function partInstallOldControllerUpdate(http: HttpClient, rootUrl: string, params: PartInstallOldControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPartInstallOldDto;
}>>;
export declare namespace partInstallOldControllerUpdate {
    var PATH: string;
}
