import {inject, Injectable} from '@angular/core';
import {TempSecondService} from './temp-second.service';

@Injectable({
  providedIn: 'root'
})
export class SimpleService {
  // secondService = inject(TempSecondService);
  constructor(private secondService: TempSecondService) { }

  sum(a: number, b?: number): number | undefined {
    if (!b && b != 0) {
      return undefined;
    }
    return a + b;
  }

  checkInSecondService() {
    return this.secondService.check();
  }

  callCheckInSecondService() {
    this.secondService.check();
  }

  sendInfoMessage(message: string): void {
    this.secondService.toasterInfo(message);
  }
}
