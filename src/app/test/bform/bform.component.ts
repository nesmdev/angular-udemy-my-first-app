import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bform',
  template: `
    <form action="">
      <input
        type="text"
        class="form-control"
        [(ngModel)]="text2"
        name="nombre"
      />
      <p>{{ text2 }}</p>
      <input type="text" class="form-control" (input)="onInput($event)" />
      <p>{{ text1 }}</p>
    </form>
  `,
  styles: [],
})
export class BformComponent implements OnInit {
  constructor() {}
  text1: string;
  text2: string;
  ngOnInit(): void {}
  onInput(evt: Event) {
    this.text1 = (<HTMLInputElement>evt.target).value;
    // this.text = evt.target.value;
  }
}
