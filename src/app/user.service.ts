import {Injectable} from '@angular/core';
import {Subject} from "rxjs/Subject";

@Injectable()
export class UserService {

  userActivated = new Subject();

  constructor() {
  }

}
