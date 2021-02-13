import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local-reference',
  template: `
    <p>
      <input
        type="text"
        class="form-control"
        #elemento
        (change)="onChange(elemento)"
      />
    </p>
    <p>{{ value }}</p>
  `,
  styles: [],
})
export class LocalReferenceComponent implements OnInit {
  constructor() {}
  value: string;
  ngOnInit(): void {}

  onChange(elemento: HTMLInputElement) {
    console.log(elemento);
    console.log(elemento.value);
    this.value = elemento.value;
  }
}
