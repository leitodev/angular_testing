import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TempSecondService {
  check() {
    return true;
  }
  toasterInfo(message: string) {
    alert(message)
  }
}
