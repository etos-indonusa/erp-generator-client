import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
export interface DocumentControllerUploadFile$Params {
    /**
     * Upload dokumen dengan metadata
     */
    body: {
        'file': Blob;
        'idDocument'?: string;
        'name'?: string;
        'nomor'?: string;
        'tanggal'?: string;
        'forModule'?: string;
        'forModuleId'?: string;
        'fileExt'?: string;
        'fileName'?: string;
        'fileLocation'?: string;
        'enableDownload'?: string;
        'idUser'?: number;
    };
}
export declare function documentControllerUploadFile(http: HttpClient, rootUrl: string, params: DocumentControllerUploadFile$Params, context?: HttpContext): Observable<StrictHttpResponse<void>>;
export declare namespace documentControllerUploadFile {
    var PATH: string;
}
