import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xyz',
  template: `
    <h1>XYZ</h1>
    <p>
      xyz works!
    </p>
  `,
  styles: [
    `
    h1{
      color: blue;
    }
    `
  ]
})
export class XyzComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
