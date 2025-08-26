import { Injectable } from '@angular/core';
import {FakeNameService} from './fake-name.service';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(private fakeService: FakeNameService) { }

  sayHi(): string {
    const name = this.fakeService.name;

    if (name === 'John') {
      return 'Hi, John!';
    } else {
      return 'Hi, stranger!'
    }

  }

  setName(name: string): void {
    this.fakeService.name = name;
  }
}
