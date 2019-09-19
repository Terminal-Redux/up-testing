import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  dispLay = false;
  title = 'up-mockup-app';
  urbPerActive: boolean;
  suitabilityActive: boolean;

  constructor() {
    this.urbPerActive = false;
    this.suitabilityActive = false;
  }

  upStatus() {
    this.urbPerActive = !this.urbPerActive;
    this.suitabilityActive = false;
  }

  stStatus() {
    this.suitabilityActive = !this.suitabilityActive;
    this.urbPerActive = false;
  }

  closePlugin() {
    this.urbPerActive = false;
    this.suitabilityActive = false;
  }
}
