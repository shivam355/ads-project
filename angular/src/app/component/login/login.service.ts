import { Injectable } from '@angular/core';
import Util from 'app/common/util';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { IdPasswordTo } from 'app/class-to/id-password-to';

@Injectable()
export class LoginService {

  constructor(private http: Http) { }

  login(input: IdPasswordTo): Observable<any> {
    return this.http.post(Util.url("/login/execute"), Util.body(input), Util.options())
      .map((response) => response.json()).catch(Util.handleError);
  }

}
