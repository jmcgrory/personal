// Imports
import { Injectable }                                 from '@angular/core';
import { Http, Response, Headers, RequestOptions }    from '@angular/http';
import { Port }                                       from '../model/port';
import { Observable }                                 from 'rxjs/Rx';

// Import rxjs js polyfills
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PortService {

  // Resolve HTTP w/ constructor
  constructor (private http: Http) {}
  // placeholder private instance variable to hold base url
  private portUrl = 'http://localhost:3000/app/api/port.json'; 

  // Fetch all existing Portfolio pieces
  getPorts() : Observable<Port[]> {
    // JM: http get request
    return this.http.get(this.portUrl)
      // JM: call .json() on the response to return data
      .map((res:Response) => res.json())
      // JM: errors if any
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}

