import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vch-child',
  template: `
    <p>vch-child works!</p>
    <p>Counter: {{ counter }}</p>
    <p>Message from Parent: {{ message }}</p>
  `,
  styles: [],
})
export class VchChildComponent implements OnInit {
  counter = 0;
  message: string;
  constructor() {}

  ngOnInit(): void {}

  count() {
    this.counter++;
  }

  getMessage(message: string) {
    this.message = message;
  }
}
