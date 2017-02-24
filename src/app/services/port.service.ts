import { Injectable }                                 from '@angular/core';
import { Http, Response, Headers, RequestOptions }    from '@angular/http';
import { Port }                                       from '../model/port';
import { Observable }                                 from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PortService {

  // Resolve HTTP using the constructor
  constructor (private http: Http) {}
  // private instance variable to hold base url
  private portUrl = 'http://localhost:3000/app/api/port.json'; 

  // Fetch all existing comments
  getPorts() : Observable<Port[]> {
    // ...using get request
    return this.http.get(this.portUrl)
      // ...and calling .json() on the response to return data
      .map((res:Response) => res.json())
      //...errors if any
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}

