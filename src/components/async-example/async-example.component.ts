import { Component } from '@angular/core';
import {AsyncDepService} from '../../services/async-dep.service';
import {Observable, Subject} from 'rxjs';

@Component({
  selector: 'app-async-example',
  imports: [],
  templateUrl: './async-example.component.html',
  styleUrl: './async-example.component.scss'
})
export class AsyncExampleComponent {
  subjectExample = new Subject<string>();

  constructor(private asyncDepService: AsyncDepService) {
  }

  getPromise(name?: string) {
    return new Promise((resolve, reject) => {
      if (!name) {
        return reject(new Error('name is required'));
      }
      setTimeout(() => {
        resolve(name);
      }, 0)
    });
  }

  getPromiseWithNameAndAge(name: string, age: number) {
    return this.asyncDepService.getPromiseWithAge(age).then((result) => {
      return `[${result}] ${name}`;
    });
  }

  getObservable(name: string) {
    return new Observable(observer => {
      setTimeout(() => {
        observer.next(name);
        observer.complete();
      }, 2000)
    })
  }

  pushSubject(name: string) {
    this.subjectExample.next(name);
  }




}
