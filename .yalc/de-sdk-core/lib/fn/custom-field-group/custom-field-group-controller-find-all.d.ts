import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { ToolsCustomFieldGroupDto } from '../../models/tools-custom-field-group-dto';
export interface CustomFieldGroupControllerFindAll$Params {
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
export declare function customFieldGroupControllerFindAll(http: HttpClient, rootUrl: string, params?: CustomFieldGroupControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<ToolsCustomFieldGroupDto>;
    'total'?: number;
}>>;
export declare namespace customFieldGroupControllerFindAll {
    var PATH: string;
}
