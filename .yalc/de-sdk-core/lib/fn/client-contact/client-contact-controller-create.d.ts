import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { PelangganClientContactDto } from '../../models/pelanggan-client-contact-dto';
export interface ClientContactControllerCreate$Params {
    body: PelangganClientContactDto;
}
export declare function clientContactControllerCreate(http: HttpClient, rootUrl: string, params: ClientContactControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: PelangganClientContactDto;
}>>;
export declare namespace clientContactControllerCreate {
    var PATH: string;
}
