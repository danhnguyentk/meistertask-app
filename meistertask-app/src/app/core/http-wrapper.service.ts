import { Injectable } from '@angular/core';
import {
    Http,
    Headers,
    RequestOptions,
    Response,
    URLSearchParams
} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';

import { AppConfig } from './app-config.service';
import { CaseFormat } from '../helper/case-format';

@Injectable()
export class HttpWrapperService {

    constructor(
        private http: Http,
        private appConfig: AppConfig ) { }

    get(url: string, paramObj?: Object): Observable<any> {
        const params: URLSearchParams = this.convertObjToParams(CaseFormat.convertKeysToSnakeCase(paramObj));
        return this.http.get(`${this.appConfig.API.ROOT_URL}${url}`, { search: params })
            .map(this.extractData.bind(this))
            .catch(this.handleError.bind(this));
    }

    post(url: string, body: Object, paramObj?: Object): Observable<any> {
        const options: RequestOptions = this.getOption(paramObj);
        const bodyReq = CaseFormat.convertKeysToSnakeCase(body);
        return this.http.post(`${this.appConfig.API.ROOT_URL}${url}`, bodyReq, options)
            .map(this.extractData.bind(this))
            .catch(this.handleError.bind(this));
    }

    delete(url: string, paramObj?: Object): Observable<any> {
        const options: RequestOptions = this.getOption(paramObj);
        return this.http.delete(`${this.appConfig.API.ROOT_URL}${url}`, options)
            .map(this.extractData.bind(this))
            .catch(this.handleError.bind(this));
    }

    /**
     * Get RequestOptions by param object
     */
    getOption(obj: Object): RequestOptions {
        const params: URLSearchParams = this.convertObjToParams(CaseFormat.convertKeysToSnakeCase(obj));
        const headers: Headers = new Headers({ 'Content-Type': 'application/json' });
        const options: RequestOptions = new RequestOptions({
            headers: headers,
            search: params
        });
        return options;
    }

    /**
     * Convert object to URLSearchParams
     */
    convertObjToParams(obj: Object):  URLSearchParams {
        if (obj) {
            let params: URLSearchParams = new URLSearchParams();
            if (obj) {
                _.forOwn(obj, (value: any, key: string) => {
                    if (value) {
                        params.set(key, value);
                    }
                });
            }
            return params;
        }
        return null;
    }

    /**
     * Resolve when http success
     */
    private extractData(res: Response): any {
        return CaseFormat.convertKeysToCamelCase(res.json());
    }

    /**
     * Resolve when http fail
     */
    private handleError(err: Response) {
        return Observable.throw(CaseFormat.convertKeysToCamelCase(err.json()));
    }
}
