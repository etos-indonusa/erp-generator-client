import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { PelangganClientContactDto } from '../../models/pelanggan-client-contact-dto';
export interface ClientContactControllerFindOne$Params {
    id: string;
}
export declare function clientContactControllerFindOne(http: HttpClient, rootUrl: string, params: ClientContactControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: PelangganClientContactDto;
}>>;
export declare namespace clientContactControllerFindOne {
    var PATH: string;
}
