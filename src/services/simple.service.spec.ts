import { TestBed } from '@angular/core/testing';

import { SimpleService } from './simple.service';
import {TempSecondService} from './temp-second.service';

describe('SimpleService', () => {
  let service: SimpleService;
  let secondServiceSpy: jasmine.SpyObj<TempSecondService>;

  beforeEach(() => {
    // Создаем мок для TempSecondService
    const spy = jasmine.createSpyObj('TempSecondService', ['check']);

    TestBed.configureTestingModule({
      providers: [
        SimpleService,
        { provide: TempSecondService, useValue: spy}
      ],
    });
    service = TestBed.inject(SimpleService);
    secondServiceSpy = TestBed.inject(TempSecondService) as jasmine.SpyObj<TempSecondService>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('sum() should has calculate sum of two arguments', () => {
    expect(service.sum(1, 4)).toBe(5);
    expect(service.sum(2, 3)).toBe(5);
    expect(service.sum(4, 1)).toBe(5);
    expect(service.sum(5, 0)).toBe(5);
  });

  it('sum() should return Undefined (if have only first argument)', () => {
    expect(service.sum(13)).toBeUndefined();
  });

  it('checkInSecondService() should return true', () => {
    secondServiceSpy.check.and.returnValue(true);

    const result = service.checkInSecondService();

    expect(secondServiceSpy.check).toHaveBeenCalled();
    expect(result).toBe(true);
  });

});
