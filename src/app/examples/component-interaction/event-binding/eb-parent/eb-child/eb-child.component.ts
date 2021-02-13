import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eb-child',
  template: `
    <p>
      eb-child works!
    </p>
  `,
  styles: [
  ]
})
export class EbChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
