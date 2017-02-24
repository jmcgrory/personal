import { Injectable }                                 from '@angular/core';
import { Http, Response, Headers, RequestOptions }    from '@angular/http';
import { Skill }                                       from '../model/skill';
import { Observable }                                 from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SkillsService {

  // Resolve HTTP using the constructor
  constructor (private http: Http) {}
  // private instance variable to hold base url
  private skillUrl = 'http://localhost:3000/app/api/skills.json'; 

  // Fetch all existing comments
  getSkills() : Observable<Skill[]> {
    // ...using get request
    return this.http.get(this.skillUrl)
      // ...and calling .json() on the response to return data
      .map((res:Response) => res.json())
      //...errors if any
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}

