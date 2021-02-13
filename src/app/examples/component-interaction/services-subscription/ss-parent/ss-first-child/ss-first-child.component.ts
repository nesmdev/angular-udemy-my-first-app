import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ss-first-child',
  template: `
    <p>
      ss-first-child works!
    </p>
  `,
  styles: [
  ]
})
export class SsFirstChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
