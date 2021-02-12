import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private messageSrc = new Subject<string>();
  message$ = this.messageSrc.asObservable();
  private msg = 'test...';
  //message$: BehaviorSubject<string>;
  // message$ = new BehaviorSubject('test...');

  constructor() {}

  // getMessage(): Observable<string> {
  //   console.log('Got Message... ');
  //   return this.message$.asObservable();
  // }
  sendMessage(msg: string) {
    this.msg = msg;
    // console.log('Message got... ' + this.msg);
    this.messageSrc.next(this.msg);
    // console.log('Message sent... ' + this.msg);
    //  console.log('Message$ sent... ' + this.messageSrc.g);
  }
}
