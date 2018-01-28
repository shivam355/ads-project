import { Http, Request, Response, Headers, ResponseOptions, RequestOptions } from '@angular/http';
import { Observable } from "rxjs/Observable";

export default class Util {
    private static readonly preUrl: string = "http://localhost";

    static url(relativeUrl: string): string {
        return this.preUrl + relativeUrl;
    }

    static body(data?: any): string {
        if (data) {
            return JSON.stringify(data);
        }
        return null;
    }

    static options(): RequestOptions {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });
        return options;
    }

    static handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
