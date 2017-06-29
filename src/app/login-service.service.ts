import { Injectable } from '@angular/core';
import {Http, URLSearchParams, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs';
@Injectable()
export class LoginServiceService {

  constructor(private http: Http) { }
  logininService(login_data){
      let headers = new Headers({ 'Content-Type': 'application/json'});
      let options = new RequestOptions({ headers: headers });
      return this.http.post('http://localhost:9080/patient/',
          JSON.stringify(login_data), options).map(
          (res: Response) =>
              res.json()
      )
          .catch(
              (error: Response) =>
              {
                  console.log('Somthing went wrong with the request');
                  return Observable.throw(error);
              }
          );
  }

}
