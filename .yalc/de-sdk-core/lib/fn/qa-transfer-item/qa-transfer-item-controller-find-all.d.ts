import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsQaTransferItemDto } from '../../models/amims-qa-transfer-item-dto';
export interface QaTransferItemControllerFindAll$Params {
    pageIndex?: number;
    pageSize?: number;
    /**
     * JSON.stringify({})
     */
    filter?: string;
    sortKey?: string;
    sortValue?: 'asc' | 'desc';
    /**
     * Array of searchable fields
     */
    search_field?: Array<string>;
    search_keyword?: string;
}
export declare function qaTransferItemControllerFindAll(http: HttpClient, rootUrl: string, params?: QaTransferItemControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsQaTransferItemDto>;
    'total'?: number;
}>>;
export declare namespace qaTransferItemControllerFindAll {
    var PATH: string;
}
