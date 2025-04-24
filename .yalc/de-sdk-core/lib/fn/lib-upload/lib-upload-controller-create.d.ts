import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsLibUploadDto } from '../../models/amims-lib-upload-dto';
export interface LibUploadControllerCreate$Params {
    body: AmimsLibUploadDto;
}
export declare function libUploadControllerCreate(http: HttpClient, rootUrl: string, params: LibUploadControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsLibUploadDto;
}>>;
export declare namespace libUploadControllerCreate {
    var PATH: string;
}
