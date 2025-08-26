import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FirstComponent} from '../components/first/first.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FirstComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'unit-t';
}
