import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncExampleComponent } from './async-example.component';
import {AsyncDepService} from '../../services/async-dep.service';

describe('AsyncExampleComponent', () => {
  let component: AsyncExampleComponent;
  let fixture: ComponentFixture<AsyncExampleComponent>;
  const fakeAsyncDepService = jasmine.createSpyObj("AsyncDepService", ["getPromiseWithAge"]);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsyncExampleComponent],
      providers: [
        {
          provide: AsyncDepService, useValue: fakeAsyncDepService
        }
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsyncExampleComponent);

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return Promise with param', async () => {
    const result = await component.getPromise('Andrii');
    expect(result).toBe('Andrii');
  })

  it('should return Error from Promise without param', async () => {
    await expectAsync(component.getPromise()).toBeRejectedWithError('name is required');
  });

  it('should return Promise from AsyncDepService then return concat string', async () => {
    fakeAsyncDepService.getPromiseWithAge.and.returnValue(Promise.resolve(33));

    await expectAsync(component.getPromiseWithNameAndAge('John', 33))
      .toBeResolvedTo('[33] John');
  });


  it('should return Promise with param -- callback done', done => {
    component.getPromise('Andrii').then(result => {
      expect(result).toBe('Andrii');
      done();
    });
  });

  it('Observable example with param name -- callback done', done => {
    component.getObservable('Jinx').subscribe(result => {
      expect(result).toBe('Jinx');
      done();
    });
  });

  it('Subject example with param name -- callback done', done => {
    component.subjectExample.subscribe(result => {
      expect(result).toBe('Jax');
      done();
    });

    component.pushSubject('Jax');
  });


});
