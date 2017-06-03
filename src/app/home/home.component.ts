import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import {Subscription} from "rxjs/Subscription";
import 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  numbersObsSubscription: Subscription;
  customObsSubscription: Subscription;

  constructor() {
  }

  ngOnInit() {
    const myNumbers = Observable.interval(1000)
      .map((data: number) => {
        return 2 * data;
      });
    this.numbersObsSubscription = myNumbers.subscribe(
      (numbers: number) => {
        console.log(numbers);
      }
    );

    const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('first package');
      }, 2000);
      setTimeout(() => {
        observer.next('second package');
      }, 4000);
      setTimeout(() => {
        // observer.error('This does not work');
        observer.complete();
      }, 5000);
      setTimeout(() => {
        observer.next('third package');
      }, 6000);
    });

    this.customObsSubscription = myObservable.subscribe(
      (data: string) => {
        console.log(data);
      },
      (error: string) => {
        console.log(error);
      },
      () => {
        console.log('completed');
      }
    );
  }

  ngOnDestroy() {
    this.numbersObsSubscription.unsubscribe();
    this.customObsSubscription.unsubscribe();
  }

}
