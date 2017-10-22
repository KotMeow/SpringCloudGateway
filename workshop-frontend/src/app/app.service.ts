import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class ApplicationService {

  private _warehouseUrl = 'http://localhost:8080/warehouse';
  private _resourceUrl = 'http://localhost:8080/resource';

  constructor(private _http: HttpClient) {
  }

  getWarehouse(): Observable<any> {
    return this._http.get<any>(this._warehouseUrl)
      .catch(this.handleError);
  }

  getResource(): Observable<any> {
    return this._http.get<any>(this._resourceUrl)
      .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err);
    return Observable.throw(err.message);
  }
}
