import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakeNameService {
  nameValue: string = 'John';

  constructor() { }

  get name() {
    return this.nameValue;
  }

  set name(value) {
    this.nameValue = value;
  }
}
