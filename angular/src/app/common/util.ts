import { Http, Request, Response, Headers, ResponseOptions, RequestOptions } from '@angular/http';
import { Observable } from "rxjs/Observable";
import Constant from 'app/common/constant';
import { SessionTo } from 'app/class-to/session-to';

export default class Util {

    static url(relativeUrl: string): string {
        return Constant._PRE_URL + relativeUrl;
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

    static isSessionExist(): boolean {
        let sessionStr: string = localStorage.getItem(Constant._USER_SESSION_KEY);
        if (sessionStr) {
            return true;
        }
        return false;
    }

    static getSession(): SessionTo {
        let sessionStr: string = localStorage.getItem(Constant._USER_SESSION_KEY);
        if (!sessionStr) {
            return null;
        }
        let sessionTo: SessionTo = JSON.parse(sessionStr);
        return sessionTo;
    }

    static createSession(sessionTo: SessionTo) {
        this.invalidateSession();
        localStorage.setItem(Constant._USER_SESSION_KEY, JSON.stringify(sessionTo));
    }

    static invalidateSession() {
        localStorage.removeItem(Constant._USER_SESSION_KEY);
    }
}
