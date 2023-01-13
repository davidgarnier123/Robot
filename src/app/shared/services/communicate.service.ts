import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicateService {

  public subject$ = new Subject();

  constructor() { }

  /**
   * @name start
   * @description send config to grid component
   * @param startValues {object}
   */
  public start = (startValues: any): void => {
    this.subject$.next(startValues);
  }

}
