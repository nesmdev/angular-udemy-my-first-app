import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lv-child',
  template: ` <p>lv-child works!</p>
    Counter: {{ counter }}<br />
    Message from parent: {{ message }}`,
  styles: [],
})
export class LvChildComponent implements OnInit {
  message: string;
  counter = 0;
  constructor() {}

  ngOnInit(): void {}
  count() {
    this.counter++;
  }

  getMessage(messageInput: HTMLInputElement) {
    this.message = messageInput.value;
  }
}
