import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstComponent } from './first.component';
import {By} from '@angular/platform-browser';

describe('FirstComponent', () => {
  let component: FirstComponent;
  let fixture: ComponentFixture<FirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change @Input first name', () => {
    const fixture = TestBed.createComponent(FirstComponent);
    const component = fixture.componentInstance;
    component.firstName = 'John'; // change @input
    fixture.detectChanges();
    expect(component.firstName).toEqual('John');
  })

  it('should render changed @Input first name', () => {
    const fixture = TestBed.createComponent(FirstComponent);
    const component = fixture.componentInstance;
    component.firstName = 'John';
    fixture.detectChanges();
    expect(component.firstName).toEqual('John');
    const span = fixture.nativeElement.querySelector('span');
    expect(span.textContent).toContain('firstName: John');
  });

  it('should emit firstName by using @Output sendNameEvent', () => {
    const event = spyOn(component.sendNameEvent, 'emit')
    component.firstName = 'Rocky';
    component.sendName();
    expect(event).toHaveBeenCalledWith('Rocky');
  });

  it('should emit firstName by DOM click', () => {
    const event = spyOn(component.sendNameEvent, 'emit')
    const button = fixture.nativeElement.querySelector('button');
    component.firstName = 'Rocky';
    button.click();
    expect(event).toHaveBeenCalledWith('Rocky');
  });

  it('\<span\> with name John should have class .fill !', () => {
    component.firstName = 'John';
    fixture.detectChanges();
    const spanName = fixture.debugElement.query(By.css('span.fill'));
    expect(spanName).toBeTruthy();
  });


});
// https://youtu.be/Kj9Z4HFWlv4?t=1971
