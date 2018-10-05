import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Http, RequestOptions, Headers } from "@angular/http";

import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import 'rxjs/add/observable/throw';

@Injectable()
export class HttpManager {

  requestOptions: RequestOptions;
  headers: Headers;

  constructor(private http: Http) {
    this.headers = new Headers();
    this.headers.append("Content-Type", "application/json");
    this.headers.append("Accept", "application/json");

    this.requestOptions = new RequestOptions({ headers: this.headers });
  }

  get(url: string): Observable<any> {
    let getObservable = this.http
      .get(url)
      .map(r => r.json())
      .catch(e => Observable.throw(e));

    return getObservable;
  }

  post(url: string, entity: any): Observable<any> {
    let postObservable = this.http
      .post(url, JSON.stringify(entity), this.requestOptions)
      .map(r => r.json())
      .catch(e => Observable.throw(e));

    return postObservable;
  }

  put(url: string, entity: any): Observable<any> {
    let putObservable = this.http
      .put(url, JSON.stringify(entity), this.requestOptions)
      .map(r => r.json())
      .catch(e => Observable.throw(e));

    return putObservable;
  }

  delete(url: string): Observable<any> {
    let deleteObservable = this.http
      .delete(url)
      .map(r => r.json())
      .catch(e => Observable.throw(e));

    return deleteObservable;
  }
}
