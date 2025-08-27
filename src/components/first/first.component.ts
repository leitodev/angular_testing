import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-first',
  imports: [],
  templateUrl: './first.component.html',
  styleUrl: './first.component.scss'
})
export class FirstComponent {
  @Input({ required: true }) firstName = 'Leito';
  @Output() sendNameEvent: EventEmitter<string> = new EventEmitter();

  sendName() {
    this.sendNameEvent.emit(this.firstName);
  }

  setNameAfterMinute(name: string) {
    setTimeout(() => {
      this.firstName = name;
    }, 60000)
  }
}
