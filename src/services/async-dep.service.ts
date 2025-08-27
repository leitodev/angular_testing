import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AsyncDepService {

  getPromiseWithAge(age?: number) {
    return new Promise((resolve, reject) => {
      if (!age) {
        return reject(new Error('age is required'));
      }
      setTimeout(() => {
        resolve(age);
      }, 3000)
    });
  }

}
