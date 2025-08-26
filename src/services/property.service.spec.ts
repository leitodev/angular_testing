import { TestBed } from '@angular/core/testing';

import { PropertyService } from './property.service';
import {FakeNameService} from './fake-name.service';

describe('PropertyService', () => {
  let service: PropertyService;
  let fakeNameServiceSpy = {
    get name(){ return ''},
    set name(val: string) {}
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PropertyService, {
        provide: FakeNameService, useValue: fakeNameServiceSpy
      }]
    });
    service = TestBed.inject(PropertyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return Hi, John!, when name equal John', () => {
    spyOnProperty(fakeNameServiceSpy, 'name', 'get').and.returnValue('John');
    expect(service.sayHi()).toBe('Hi, John!');
  });

  it('should set name Mike', () => {
    const spy = spyOnProperty(fakeNameServiceSpy, 'name', 'set').and.callThrough();
    service.setName('Mike');
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith('Mike');
  });

  it('should set name Mike and then return Hi, stranger!,  when name equal is not John after setter', () => {
    const spy = spyOnProperty(fakeNameServiceSpy, 'name', 'set').and.callThrough();
    service.setName('Mike');
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith('Mike');
    spyOnProperty(fakeNameServiceSpy, 'name', 'get').and.returnValue('Mike');
    expect(service.sayHi()).toBe('Hi, stranger!');
  });

});
