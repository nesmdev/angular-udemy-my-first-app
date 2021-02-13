import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ib-child',
  template: `
    <p>
      ib-child works!
    </p>
  `,
  styles: [
  ]
})
export class IbChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
